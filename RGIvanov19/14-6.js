function checkAge(age)
{
    if (age > 18)
    {
        return true;
    }
    else
    {
        return confirm("Did your parents allow you?");
    }
}
