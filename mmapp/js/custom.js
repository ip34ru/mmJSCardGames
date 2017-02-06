/* Theme Name: The Project - Responsive Website Template
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version:1.2.0
 * Created:March 2015
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */

//owl-carousel
$('.mm__owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        993:{
            items:3
        },
        1200:{
            items:3
        }
    }
});
//owl-carousel ----

// Rev-slider =======
		//Revolution Slider 5
		if ($(".slider-revolution-5-container").length>0) {
			$(".tp-bannertimer").show();


			$('#slider-banner-boxedwidth-lg').revolution({
				sliderType:"standard",
				sliderLayout:"auto",
				delay:8000,
				gridwidth:1140,
				gridheight:592,						// taksenov 07-08-2016 высота картинки главного слайдера.
				shadow: 0,                   		// taksenov 07-08-2016 удалена тень под главным слайдером
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable:true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left : {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0,
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					},
					bullets:{
						style:"",
						enable:false,                     // taksenov 07-08-2016 убраны точки в слайдере по умолчанию было true
						hide_onleave:true,
						direction:"horizontal",
						space: 3,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20
					}
				}
			});
			$('#slider-banner-boxedwidth-md').revolution({
				sliderType:"standard",
				sliderLayout:"auto",
				delay:8000,
				gridwidth:1140,
				gridheight:592,						// taksenov 07-08-2016 высота картинки главного слайдера.
				shadow: 0,                   		// taksenov 07-08-2016 удалена тень под главным слайдером
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable:true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left : {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0,
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					},
					bullets:{
						style:"",
						enable:false,                     // taksenov 07-08-2016 убраны точки в слайдере по умолчанию было true
						hide_onleave:true,
						direction:"horizontal",
						space: 3,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20
					}
				}
			});
			$('#slider-banner-boxedwidth-sm').revolution({
				sliderType:"standard",
				sliderLayout:"auto",
				delay:8000,
				gridwidth:1140,
				gridheight:592,						// taksenov 07-08-2016 высота картинки главного слайдера.
				shadow: 0,                   		// taksenov 07-08-2016 удалена тень под главным слайдером
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable:true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left : {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0,
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					},
					bullets:{
						style:"",
						enable:false,                     // taksenov 07-08-2016 убраны точки в слайдере по умолчанию было true
						hide_onleave:true,
						direction:"horizontal",
						space: 3,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20
					}
				}
			});
			$('#slider-banner-boxedwidth-xs').revolution({
				sliderType:"standard",
				sliderLayout:"auto",
				delay:8000,
				gridwidth:279,
				gridheight:379,						// taksenov 07-08-2016 высота картинки главного слайдера.
				shadow: 0,                   		// taksenov 07-08-2016 удалена тень под главным слайдером
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable:true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left : {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0,
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					},
					bullets:{
						style:"",
						enable:false,                     // taksenov 07-08-2016 убраны точки в слайдере по умолчанию было true
						hide_onleave:true,
						direction:"horizontal",
						space: 3,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20
					}
				}
			});
		};
// Rev-slider =======

// Trumbowyg
// jQuery.trumbowyg.langs.ru= {
//     insertImage: "Изображение"            //todo исправить в самом файле локализации
// };
// $('.mm__common_textarea--trumbowyg').trumbowyg({
//     removeformatPasted: true,
//     semantic: false,
//     autogrow: true,
//     lang: 'ru',
//     btns: [
//             ['viewHTML'],
//             //['undo', 'redo'],
//             ['formatting'],
//             ['bold', 'italic'],
//             ['link'],
//             ['image'],
//             'btnGrp-lists',
//             ['foreColor', 'backColor'],
//             ['horizontalRule'],
//             ['emoji'],
//             ['table'],
//             ['fullscreen']
//         ],
//     btnsDef: {
//         // Customizables dropdowns
//         image: {
//             dropdown: ['insertImage', 'upload', 'base64', 'noembed'],
//             ico: 'insertImage'
//         }
//     },
//     plugins: {
//         // Add imagur parameters to upload plugin
//         upload: {
//             serverPath: 'https://api.imgur.com/3/image',
//             fileFieldName: 'image',
//             headers: {
//                 'Authorization': 'Client-ID 9e57cb1c4791cea' //todo сделать загрузку на свой сервак
//             },
//             urlPropertyName: 'data.link'
//         }
//     }
// });
// emojify.setConfig(
//         {
//             mode: 'sprite'
//             //mode: 'img'
//             ,
//             ignore_emoticons: false
//         }
// );
// emojify.run(); //todo здесь он нужен, чтоб преобразовать в иконки в выпадашке

// Trumbowyg
