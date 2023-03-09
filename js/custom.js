var form = document.querySelector('.pageclip-form')
Pageclip.form(form, {
  onSubmit: function (event) { },
  onResponse: function (error, response) { },
  successTemplate: '<div class="ty"><p class="font_8">Gracias por ser parte!</p></div>'
})