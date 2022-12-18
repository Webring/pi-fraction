PEOPLE_LIST = ["Никита", "Михаил", "Кирилл", "Денис", "Егор"]
START_DATE = "19.12.2022"
START_POS = 0

start_date = moment(START_DATE, "DD.MM.YYYY")
date_selector = document.getElementById("date_select")

update_page()

function update_page(to_moment = moment()) {
    duration = moment.duration(to_moment - start_date)
    number_of_weeks = duration.weeks()

    document.getElementById("selected_date").innerText = to_moment.format("DD.MM.YYYY");
    document.getElementById("week_start").innerText = to_moment.locale("ru").startOf("week").format("DD.MM.YYYY")
    document.getElementById("week_end").innerText = to_moment.locale("ru").endOf("week").format("DD.MM.YYYY")

    document.getElementById("thursday-clean").innerText = PEOPLE_LIST[(START_POS + number_of_weeks) % PEOPLE_LIST.length]
    document.getElementById("thursday-wash").innerText = PEOPLE_LIST[(START_POS + number_of_weeks + 1) % PEOPLE_LIST.length]
    document.getElementById("sunday-clean").innerText = PEOPLE_LIST[(START_POS + number_of_weeks) % PEOPLE_LIST.length]
    document.getElementById("sunday-wash").innerText = PEOPLE_LIST[(START_POS + number_of_weeks + 1) % PEOPLE_LIST.length]
    document.getElementById("sunday-toilet").innerText = PEOPLE_LIST[(START_POS + number_of_weeks + 2) % PEOPLE_LIST.length]
    document.getElementById("sunday-bathroom").innerText = PEOPLE_LIST[(START_POS + number_of_weeks + 3) % PEOPLE_LIST.length]

}

document.getElementById("show_datepicker_button").addEventListener("click", function () {
    date_selector.showPicker()
})
date_selector.addEventListener("change", function () {
    update_page(moment(this.value));
})

