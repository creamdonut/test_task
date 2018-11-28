function ()
{
	valid = true;

        if ( document.getElementById("datepicker").value == "мм.дд.гггг" )
        {
                alert ( "Пожалуйста, выберите дату." );
                valid = false;
        }

        return valid;
}
