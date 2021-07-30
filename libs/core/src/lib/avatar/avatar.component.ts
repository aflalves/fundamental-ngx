import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostBinding,
    Input,
    OnChanges,
    OnInit,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { ANY_LANGUAGE_LETTERS_REGEX, ColorAccent, Size, applyCssClass, getRandomColorAccent, CssClassBuilder } from '@fundamental-ngx/core/utils';

let avatarUniqueId = 0;

@Component({
    // TODO to be discussed
    // tslint:disable-next-line:component-selector
    selector: 'fd-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent implements OnChanges, OnInit, CssClassBuilder {
    /** User's custom classes */
    @Input()
    class: string;

    /** Id of the Avatar. */
    @Input()
    @HostBinding('attr.id')
    id = `fd-avatar-${avatarUniqueId++}`;

    /** Aria-label for Avatar. */
    @Input()
    @HostBinding('attr.aria-label')
    ariaLabel: string = null;

    /** Aria-Labelledby for element describing Avatar. */
    @Input()
    @HostBinding('attr.aria-labelledby')
    ariaLabelledby: string = null;

    /** Localized text for label */
    @Input()
    set label(value: string) {
        this.ariaLabel = value || null;
        this.abbreviate = this._getAbbreviate(value);
    }

    /** The size of the Avatar. Options include: *xs*, *s*, *m*, *l* and *xl*. */
    @Input() size: Size = 'l';

    /** The glyph name. */
    @Input() glyph: string = null;

    /** The glyph name for zoom icon. */
    @Input() zoomGlyph: string = null;

    /** Whether or not to apply a circle style to the Avatar. */
    @Input() circle = false;

    /** Whether or not to apply a transparent style to the Avatar. */
    @Input() transparent = false;

    /** Whether or not to apply background size contain style to the Avatar */
    @Input() contain = false;

    /** Whether or not to apply a placeholder background style to the Avatar. */
    @Input() placeholder = false;

    /** Whether or not to apply a tile background style to the Avatar. */
    @Input() tile = false;

    /** Whether or not to apply a border to the Avatar. */
    @Input() border = false;

    /** A number from 1 to 10 representing the background color of the Avatar. */
    @Input() colorAccent: ColorAccent = null;

    /** Whether or not to apply random background color to the Avatar. */
    @Input() random = false;

    /**
     * @deprecated
     * Deprecated according to Rename `backgroundImage` to `image`
     * */
    /** Background image url. */
    @Input()
    set backgroundImage(value: string) {
        this._setImage(value);
    }

    /** Background image resource: url or base64. */
    @Input()
    set image(value: string) {
        this._setImage(value);
    }
    get image(): string {
        return this._image;
    }

    @Input()
    set alterIcon(value: string) {
        this._alterIcon = value;
    }
    get alterIcon(): string {
        return this._alterIcon;
    }

    /** @hidden */
    @HostBinding('style.background-image')
    get bgImage(): string {
        return this._bgImage;
    }

    /** @hidden */
    @HostBinding('attr.role')
    get role(): string {
        return this.zoomGlyph ? 'button' : 'img';
    }

    _content: any = null;

    @ViewChild('content')
    set content(value: ElementRef) {
        console.log('Setting content', value);
        this._content = value;
        // setTimeout(() => {
        //     console.log('Setting content', value.nativeElement.innerText);
        //     this._content = value;
        // }, 0);
    }

    /** @hidden */
    abbreviate: string = null;

    /** @hidden */
    private _image: string = null;

    /** @hidden */
    private _alterIcon: string = null;

    /** @hidden */
    private _bgImage: string = null;

    /** If a default placeholder should be displayed */
    get showDefault(): boolean {
        return !this.abbreviate && !this._image && !this.glyph;
    }

    /** @hidden */
    constructor(
        private _elementRef: ElementRef,
        private _cdr: ChangeDetectorRef
    ) {}

    /** @hidden */
    ngOnInit(): void {
        this.buildComponentCssClass();
    }

    /** @hidden */
    ngOnChanges(): void {
        this.buildComponentCssClass();
    }

    @applyCssClass
    /** CssClassBuilder interface implementation
     * function must return single string
     * function is responsible for order which css classes are applied
     */
    buildComponentCssClass(): string[] {
        return [
            'fd-avatar',
            this.size ? `fd-avatar--${this.size}` : '',
            this.colorAccent && !this.random ? `fd-avatar--accent-color-${this.colorAccent}` : '',
            this.random ? `fd-avatar--accent-color-${getRandomColorAccent()}` : '',
            this.circle ? 'fd-avatar--circle' : '',
            this.border ? 'fd-avatar--border' : '',
            this.transparent ? 'fd-avatar--transparent' : '',
            this.contain ? 'fd-avatar--background-contain' : '',
            this.placeholder ? 'fd-avatar--placeholder' : '',
            this.tile ? 'fd-avatar--tile' : '',
            this.class
        ];
    }

    /** @hidden */
    elementRef(): ElementRef<any> {
        return this._elementRef;
    }

    /** @hidden Get an abbreviate from the label or return null if not fit requirements */
    private _getAbbreviate(label: string): string | null {
        if (!label || this._image) {
            return null;
        }

        const maxLettersCount = 3;
        const firstLetters = label.split(' ').map((word) => word.charAt(0));
        const abbreviate = firstLetters.join('');

        if (firstLetters.length > maxLettersCount || !abbreviate.match(ANY_LANGUAGE_LETTERS_REGEX)) {
            return null;
        }

        return abbreviate;
    }

    /** @hidden */
    private _setImage(value: string): void {
        this._image = value;

        if (value) {
            this._verifyImageUrl(value);
        } else {
            this._bgImage = null;
        }
    }

    private _verifyImageUrl(srcValue: string): void {
        const img = new Image();
        img.onerror = this._onError.bind(this);
        img.src = srcValue;
        this._assignBgImage(srcValue);
    }

    private _assignBgImage(srcValue: string): void {
        this._bgImage = 'url(' + srcValue + ')';
    }

    private _onError(): void {
        if (!this._alterIcon) {
            this._showDefaultIcon();
        } else {
            // split alterIcon string
            // check by priority from left to right
            const options = this._alterIcon.split('|');
            // options.forEach(this._processAlterIconOptions.bind(this));
            for (let i = 0; i < options.length; i++) {
                const option = options[i];

                if (option === 'content') {
                    this.abbreviate = 'XX';
                    const el = this._content.nativeElement;
                    console.log('Element Ref Text', el.innerText);
                    // debugger;
                    break;
                }
                
                if (option === 'alt') {
                    this.abbreviate = 'YY';
                    break;
                }
                
                if (option === 'custom') {
                    this.abbreviate = 'SS';
                    break;
                }
                
                if (option === 'default-icon') {
                    this._showDefaultIcon();
                    break;
                }
                
                this._showDefaultIcon();
            }
        }

        this._cdr.detectChanges();
    }

    private _showDefaultIcon(): void {
        this.abbreviate = null;
        this._image = null;
        this.glyph = null;
    }

    private _processAlterIconOptions(option: string): void {
        if (option === 'content') {
            this.abbreviate = 'XX';
        } else if (option === 'alt') {

        } else if (option === 'custom') {

        } else if (option === 'default-icon') {

        } else {
            this._showDefaultIcon();
        }
    }
}
