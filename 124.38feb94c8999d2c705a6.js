(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{"Uz+s":function(a,e,i){"use strict";i.r(e),i.d(e,"PlatformThumbnailDocsModule",(function(){return k}));var t={};i.r(t),i.d(t,"default",(function(){return u}));var l={};i.r(l),i.d(l,"default",(function(){return r}));var o={};i.r(o),i.d(o,"default",(function(){return c}));var n={};i.r(n),i.d(n,"default",(function(){return h}));var m={};i.r(m),i.d(m,"default",(function(){return b}));var d={};i.r(d),i.d(d,"default",(function(){return f}));var p=i("2kYt"),s=i("sEIs"),u='<fdp-thumbnail [mediaList]="data" [maxImagesDisplay]="5" ></fdp-thumbnail>\n',r="import { Component } from '@angular/core';\nimport { Media } from '@fundamental-ngx/platform';\n\n@Component({\n    selector: 'fdp-platform-thumbnail-basic-example',\n    templateUrl: './platform-thumbnail-basic-example.component.html'\n})\nexport class PlatformThumbnailBasicExampleComponent {\n\n    data: Media[] = [{\n        title: 'Nature Details',\n        thumbnailUrl: '//picsum.photos/id/320/640/480',\n        mediaType: 'image',\n        mediaUrl: '//picsum.photos/id/320/640/480',\n        alt: 'Failed to load //picsum.photos/id/320/640/480',\n        label: 'nature'\n    },\n    {\n        title: 'Animal Details',\n        thumbnailUrl: '//picsum.photos/id/315/640/480',\n        mediaType: 'image',\n        mediaUrl: '//picsum.photos/id/315/640/480',\n        alt: 'Failed to load //picsum.photos/id/315/640/480',\n        label: 'animal'\n    },\n    {\n        title: 'Culture Details',\n        thumbnailUrl: '//picsum.photos/id/316/600',\n        mediaType: 'image',\n        mediaUrl: '//picsum.photos/id/316/600',\n        alt: 'Failed to load //picsum.photos/id/316/600',\n        label: 'culture'\n    },\n    {\n        title: 'Nature Details',\n        thumbnailUrl: '//picsum.photos/id/1008/400',\n        mediaType: 'video',\n        mediaUrl: '//www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',\n        alt: 'Failed to load //picsum.photos/id/1008/400',\n        label: 'nature'\n    },\n    {\n        title: 'Art Details',\n        thumbnailUrl: '//picsum.photos/id/317/600',\n        mediaType: 'image',\n        mediaUrl: '//picsum.photos/id/316/600',\n        alt: 'Failed to load //picsum.photos/id/316/600',\n        label: 'art'\n    },\n    {\n        title: 'Culture Details',\n        thumbnailUrl: '//picsum.photos/id/316/600',\n        mediaType: 'image',\n        mediaUrl: '//picsum.photos/id/316/600',\n        alt: 'Failed to load //picsum.photos/id/316/600',\n        label: 'culture'\n    },\n    {\n        title: 'Nature Details',\n        thumbnailUrl: '//picsum.photos/id/1008/400',\n        mediaType: 'video',\n        mediaUrl: '//www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',\n        alt: 'Failed to load //picsum.photos/id/1008/400',\n        label: 'nature'\n    },\n    {\n        title: 'Art Details',\n        thumbnailUrl: '//picsum.photos/id/317/600',\n        mediaType: 'image',\n        mediaUrl: '//picsum.photos/id/316/600',\n        alt: 'Failed to load //picsum.photos/id/316/600',\n        label: 'art'\n    }\n    ];\n\n\n}\n",c='<fdp-thumbnail [mediaList]="data" [isHorizontal]="true"></fdp-thumbnail>\n',h="import { Component } from '@angular/core';\nimport { Media } from '@fundamental-ngx/platform';\n\n@Component({\n    selector: 'fdp-platform-thumbnail-horizontal-example',\n    templateUrl: './platform-thumbnail-horizontal-example.component.html'\n})\nexport class PlatformThumbnailHorizontalExampleComponent {\n\n    data: Media[] = [{\n        title: 'Nature Details',\n        thumbnailUrl: '//picsum.photos/id/316/600',\n        mediaType: 'image',\n        mediaUrl: '//picsum.photos/id/316/600',\n        alt: 'Failed to load //picsum.photos/id/316/600',\n        label: 'nature'\n    },\n    {\n        title: 'Animal Details',\n        thumbnailUrl: '//picsum.photos/id/317/600',\n        mediaType: 'image',\n        mediaUrl: '//picsum.photos/id/317/600',\n        alt: 'Failed to load //picsum.photos/id/317/600',\n        label: 'animal'\n    },\n    {\n        title: 'Culture Details',\n        thumbnailUrl: '//picsum.photos/id/318/600',\n        mediaType: 'image',\n        mediaUrl: '//picsum.photos/id/318/600',\n        alt: 'Failed to load //picsum.photos/id/318/600',\n        label: 'culture'\n    },\n    {\n        title: 'Sports Details',\n        thumbnailUrl: '//picsum.photos/id/319/600',\n        mediaType: 'image',\n        mediaUrl: '//picsum.photos/id/319/600',\n        alt: 'Failed to load //picsum.photos/id/319/600',\n        label: 'sports'\n    },\n    {\n        title: 'Art Details',\n        thumbnailUrl: '//picsum.photos/id/321/600',\n        mediaType: 'image',\n        mediaUrl: '//picsum.photos/id/321/600',\n        alt: 'Failed to load //picsum.photos/id/321/600',\n        label: 'art'\n    }\n    ];\n\n}\n",b='<fdp-thumbnail [mediaList]="data"></fdp-thumbnail>\n',f="import { Component } from '@angular/core';\nimport { Media } from '@fundamental-ngx/platform';\n\n@Component({\n    selector: 'fdp-platform-thumbnail-video-media-example',\n    templateUrl: './platform-thumbnail-video-media-example.component.html'\n})\nexport class PlatformThumbnailVideoMediaExampleComponent {\n\n    data: Media[] = [{\n        title: 'Nature Details',\n        thumbnailUrl: '//picsum.photos/id/1008/400',\n        mediaType: 'video',\n        mediaUrl: '//www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',\n        captionFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',\n        audioDescFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',\n        alt: 'Failed to load //picsum.photos/id/1008/400',\n        label: 'nature',\n\n    },\n    {   title: 'Animal Details',\n        thumbnailUrl: '//picsum.photos/id/1004/400',\n        mediaType: 'video',\n        mediaUrl: '//cdn.bitdegree.org/learn/Pexels%20Videos%203373.mp4?raw=true',\n        captionFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',\n        audioDescFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',\n        alt: 'Failed to load //picsum.photos/id/1004/400',\n        label: 'animal'\n\n    },\n    {\n        title: 'Culture Details',\n        thumbnailUrl: '//picsum.photos/id/1001/400',\n        mediaType: 'video',\n        mediaUrl: '//cdn.bitdegree.org/learn/Pexels%20Videos%203373.mp4?raw=true',\n        captionFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',\n        audioDescFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',\n        alt: 'Failed to load //picsum.photos/id/1001/400',\n        label: 'culture',\n\n    },\n    {\n        title: 'Dance Details',\n        thumbnailUrl: '//picsum.photos/id/1002/400',\n        mediaType: 'video',\n        mediaUrl: '//www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',\n        captionFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',\n        audioDescFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',\n        alt: 'Failed to load //picsum.photos/id/1002/400',\n        label: 'dance',\n\n    },\n    {\n        title: 'Nature Details',\n        thumbnailUrl: '//picsum.photos/id/1019/400',\n        mediaType: 'video',\n        mediaUrl: '//cdn.bitdegree.org/learn/Pexels%20Videos%203373.mp4?raw=true',\n        captionFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',\n        audioDescFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',\n        alt: 'Failed to load //picsum.photos/id/1019/400',\n        label: 'nature',\n\n    }\n    ];\n\n}\n",g=i("EM62"),U=i("9Cr2"),T=i("Zn6N"),F=i("dB5E"),w=i("kcrX"),x=function(){function a(){this.data=[{title:"Nature Details",thumbnailUrl:"//picsum.photos/id/320/640/480",mediaType:"image",mediaUrl:"//picsum.photos/id/320/640/480",alt:"Failed to load //picsum.photos/id/320/640/480",label:"nature"},{title:"Animal Details",thumbnailUrl:"//picsum.photos/id/315/640/480",mediaType:"image",mediaUrl:"//picsum.photos/id/315/640/480",alt:"Failed to load //picsum.photos/id/315/640/480",label:"animal"},{title:"Culture Details",thumbnailUrl:"//picsum.photos/id/316/600",mediaType:"image",mediaUrl:"//picsum.photos/id/316/600",alt:"Failed to load //picsum.photos/id/316/600",label:"culture"},{title:"Nature Details",thumbnailUrl:"//picsum.photos/id/1008/400",mediaType:"video",mediaUrl:"//www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",alt:"Failed to load //picsum.photos/id/1008/400",label:"nature"},{title:"Art Details",thumbnailUrl:"//picsum.photos/id/317/600",mediaType:"image",mediaUrl:"//picsum.photos/id/316/600",alt:"Failed to load //picsum.photos/id/316/600",label:"art"},{title:"Culture Details",thumbnailUrl:"//picsum.photos/id/316/600",mediaType:"image",mediaUrl:"//picsum.photos/id/316/600",alt:"Failed to load //picsum.photos/id/316/600",label:"culture"},{title:"Nature Details",thumbnailUrl:"//picsum.photos/id/1008/400",mediaType:"video",mediaUrl:"//www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",alt:"Failed to load //picsum.photos/id/1008/400",label:"nature"},{title:"Art Details",thumbnailUrl:"//picsum.photos/id/317/600",mediaType:"image",mediaUrl:"//picsum.photos/id/316/600",alt:"Failed to load //picsum.photos/id/316/600",label:"art"}]}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=g.Gb({type:a,selectors:[["fdp-platform-thumbnail-basic-example"]],decls:1,vars:2,consts:[[3,"mediaList","maxImagesDisplay"]],template:function(a,e){1&a&&g.Nb(0,"fdp-thumbnail",0),2&a&&g.sc("mediaList",e.data)("maxImagesDisplay",5)},directives:[w.a],encapsulation:2}),a}(),D=i("gJWE"),y=i("ekBi"),v=function(){function a(){this.data=[{title:"Nature Details",thumbnailUrl:"//picsum.photos/id/316/600",mediaType:"image",mediaUrl:"//picsum.photos/id/316/600",alt:"Failed to load //picsum.photos/id/316/600",label:"nature"},{title:"Animal Details",thumbnailUrl:"//picsum.photos/id/317/600",mediaType:"image",mediaUrl:"//picsum.photos/id/317/600",alt:"Failed to load //picsum.photos/id/317/600",label:"animal"},{title:"Culture Details",thumbnailUrl:"//picsum.photos/id/318/600",mediaType:"image",mediaUrl:"//picsum.photos/id/318/600",alt:"Failed to load //picsum.photos/id/318/600",label:"culture"},{title:"Sports Details",thumbnailUrl:"//picsum.photos/id/319/600",mediaType:"image",mediaUrl:"//picsum.photos/id/319/600",alt:"Failed to load //picsum.photos/id/319/600",label:"sports"},{title:"Art Details",thumbnailUrl:"//picsum.photos/id/321/600",mediaType:"image",mediaUrl:"//picsum.photos/id/321/600",alt:"Failed to load //picsum.photos/id/321/600",label:"art"}]}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=g.Gb({type:a,selectors:[["fdp-platform-thumbnail-horizontal-example"]],decls:1,vars:2,consts:[[3,"mediaList","isHorizontal"]],template:function(a,e){1&a&&g.Nb(0,"fdp-thumbnail",0),2&a&&g.sc("mediaList",e.data)("isHorizontal",!0)},directives:[w.a],encapsulation:2}),a}(),N=function(){function a(){this.data=[{title:"Nature Details",thumbnailUrl:"//picsum.photos/id/1008/400",mediaType:"video",mediaUrl:"//www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",captionFile:"//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177",audioDescFile:"//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177",alt:"Failed to load //picsum.photos/id/1008/400",label:"nature"},{title:"Animal Details",thumbnailUrl:"//picsum.photos/id/1004/400",mediaType:"video",mediaUrl:"//cdn.bitdegree.org/learn/Pexels%20Videos%203373.mp4?raw=true",captionFile:"//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177",audioDescFile:"//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177",alt:"Failed to load //picsum.photos/id/1004/400",label:"animal"},{title:"Culture Details",thumbnailUrl:"//picsum.photos/id/1001/400",mediaType:"video",mediaUrl:"//cdn.bitdegree.org/learn/Pexels%20Videos%203373.mp4?raw=true",captionFile:"//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177",audioDescFile:"//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177",alt:"Failed to load //picsum.photos/id/1001/400",label:"culture"},{title:"Dance Details",thumbnailUrl:"//picsum.photos/id/1002/400",mediaType:"video",mediaUrl:"//www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",captionFile:"//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177",audioDescFile:"//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177",alt:"Failed to load //picsum.photos/id/1002/400",label:"dance"},{title:"Nature Details",thumbnailUrl:"//picsum.photos/id/1019/400",mediaType:"video",mediaUrl:"//cdn.bitdegree.org/learn/Pexels%20Videos%203373.mp4?raw=true",captionFile:"//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177",audioDescFile:"//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177",alt:"Failed to load //picsum.photos/id/1019/400",label:"nature"}]}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=g.Gb({type:a,selectors:[["fdp-platform-thumbnail-video-media-example"]],decls:1,vars:1,consts:[[3,"mediaList"]],template:function(a,e){1&a&&g.Nb(0,"fdp-thumbnail",0),2&a&&g.sc("mediaList",e.data)},directives:[w.a],encapsulation:2}),a}(),C=function(){function a(){this.basicThumbnail=[{language:"html",code:t,fileName:"platform-thumbnail-basic-example"},{language:"typescript",component:"PlatformThumbnailBasicExampleComponent",code:l,fileName:"platform-thumbnail-basic-example"}],this.horizontalThumbnail=[{language:"html",code:o,fileName:"platform-thumbnail-horizontal-example"},{language:"typescript",component:"PlatformThumbnailHorizontalExampleComponent",code:n,fileName:"platform-thumbnail-horizontal-example"}],this.videoThumbnail=[{language:"html",code:m,fileName:"platform-thumbnail-video-media-example"},{language:"typescript",component:"PlatformThumbnailVideoMediaExampleComponent",code:d,fileName:"platform-thumbnail-video-media-example"}]}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=g.Gb({type:a,selectors:[["app-platform-thumbnail"]],decls:24,vars:3,consts:[["id","thumbnail-basic","componentName","thumbnail"],[3,"exampleFiles"],["id","thumbnail-horizontal","componentName","thumbnail"],["id","thumbnail-video","componentName","thumbnail"]],template:function(a,e){1&a&&(g.Sb(0,"fd-docs-section-title",0),g.Tc(1," Basic Thumbnail.\n"),g.Rb(),g.Sb(2,"description"),g.Tc(3," Example to demonstrate the basic thumbnail component with Image media example.\n"),g.Rb(),g.Sb(4,"component-example"),g.Nb(5,"fdp-platform-thumbnail-basic-example"),g.Rb(),g.Nb(6,"code-example",1),g.Nb(7,"separator"),g.Sb(8,"fd-docs-section-title",2),g.Tc(9," Horizontal orientaiton of Thumbnail Example.\n"),g.Rb(),g.Sb(10,"description"),g.Tc(11," Example to demonstrate the horizontal orientation of thumbnail images in thumbnail component with Image media example.\n"),g.Rb(),g.Sb(12,"component-example"),g.Nb(13,"fdp-platform-thumbnail-horizontal-example"),g.Rb(),g.Nb(14,"code-example",1),g.Nb(15,"separator"),g.Sb(16,"fd-docs-section-title",3),g.Tc(17," Thumbnail with Video Example.\n"),g.Rb(),g.Sb(18,"description"),g.Tc(19," Example to demonstrate the thumbnail component with Video media example.\n"),g.Rb(),g.Sb(20,"component-example"),g.Nb(21,"fdp-platform-thumbnail-video-media-example"),g.Rb(),g.Nb(22,"code-example",1),g.Nb(23,"separator")),2&a&&(g.Ab(6),g.sc("exampleFiles",e.basicThumbnail),g.Ab(8),g.sc("exampleFiles",e.horizontalThumbnail),g.Ab(8),g.sc("exampleFiles",e.videoThumbnail))},directives:[U.a,T.a,F.a,x,D.a,y.a,v,N],encapsulation:2}),a}(),z=i("P+xO"),P=i("7o9V"),S=i("h8DJ"),A=function(){function a(){}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=g.Gb({type:a,selectors:[["app-thumbnail-header"]],decls:14,vars:0,consts:[[1,"fd-info-labels"],["title","Non Fiori 3 Component",1,"fd-info-label","fd-info-label--accent-color-6"],["title","Fiori 3 Themeable Component",1,"fd-info-label","fd-info-label--accent-color-3"],["module","PlatformThumbnailModule"]],template:function(a,e){1&a&&(g.Sb(0,"header"),g.Tc(1,"Thumbnail"),g.Rb(),g.Sb(2,"div",0),g.Sb(3,"span",1),g.Tc(4,"non-fiori 3"),g.Rb(),g.Sb(5,"span",2),g.Tc(6,"themeable"),g.Rb(),g.Rb(),g.Sb(7,"description"),g.Tc(8," Thumbnail is an image with a reduced file size that is used as a placeholder for full sized multimedia content. The small file size of thumbnails makes it possible for website designers to offer visitors a lot of content immediately without increasing the loading time of the page. Clicking on the thumbnail takes you to the media content in original size, which can be opened in a bigger media slot. "),g.Nb(9,"br"),g.Rb(),g.Nb(10,"br"),g.Nb(11,"import",3),g.Nb(12,"fd-header-tabs"),g.Nb(13,"router-outlet"))},directives:[z.a,T.a,P.a,S.a,s.g],styles:[""]}),a}(),E=i("eCHz"),R=i("qOWU"),M=i("MOJJ"),V=i("63W6"),L=[{path:"",component:A,children:[{path:"",component:C},{path:"api",component:E.a,data:{content:R.a.thumbnail}}]}],k=function(){function a(){}return a.\u0275mod=g.Kb({type:a}),a.\u0275inj=g.Jb({factory:function(e){return new(e||a)},imports:[[s.f.forChild(L),p.c,M.a,V.PlatformThumbnailModule],s.f]}),a}()}}]);