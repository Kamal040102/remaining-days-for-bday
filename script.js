const findDays = () => {
    const date = new Date();
    const user_input = document.getElementById('date').value.split("-");
    const user_month = parseInt(user_input[1]);
    const user_date = parseInt(user_input[2]);
    // console.log(user_month + "-" + user_date);

    const cur_month = date.getMonth()+1;
    const cur_date = date.getDate();
    // console.log(cur_month + "-" + cur_date);
    
    // console.log(typeof(user_month))
    // console.log(typeof(cur_month))
    const rem_days = [
        cur_month < user_month ? user_month-cur_month : (12)-(cur_month-user_month),
        cur_date < user_date ? user_date - cur_date : cur_date - user_date
    ]

    document.getElementById('remDays').innerHTML = `${rem_days[0]} Month(s) ${rem_days[1]} Day(s) remaining for your birthday.`
}