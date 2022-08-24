const findBlockByAlias = (alias) => {
    return $(".reviews__item").filter((ndx, item) => {
        return $(item).attr("data-linked-with") == alias;
    })
}

    $(".interactive-avatar__link").click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest(".reviews-switcher__item");

    curItem.addClass("active").siblings().removeClass("active");
    itemToShow.addClass("active").siblings().removeClass("active");
});
