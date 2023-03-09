var form = document.querySelector('.pageclip-form')
Pageclip.form(form, {
  onSubmit: function (event) { },
  onResponse: function (error, response) { },
  successTemplate: '<div class="ty"><p class="font_1">Gracias por formar parte de esto!</p></div>'
})