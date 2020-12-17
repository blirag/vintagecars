(function ($) {
    $('header a[href^="#"]').on('click', function (e) {
        e.preventDefault()

        const id = $(this).attr('href')
        const targetOffset = $(id).offset().top

        $('html, body').animate({
            scrollTop: targetOffset - 100
        }, 500)
    })

    $(document).ready(function () {
        let url = $('.navbar ul li a')
        let container = $('.content')
        const init = 'init'

        container.load('../pages/' + init + '.html')

        url.on('click', function () {
            const $this = $(this)
            const target = $this.data('target')

            $(url).removeClass('selected')
            $this.addClass('selected')

            container.load(target + '.html')

            return false
        })

        $('.menu-toggle').click(function () {
            $('.menu-toggle').toggleClass('active')
            $('.navbar ul').toggleClass('active')
        })
    })
})(jQuery)