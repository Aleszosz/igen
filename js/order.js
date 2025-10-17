function sendOrderData()
{
    const name = document.querySelector("#name").value.trim()
    //const email = document.querySelector("#email").value
    //const address = document.querySelector("#address").value

    const extra = parseInt(document.querySelector("[name=extra]:checked").value)
    const sauce = parseInt(document.querySelector("#sauce").value)
    const quantity = parseInt(document.querySelector("#quantity").value)

    const message = document.querySelector("#message")

    if(!quantity || quantity < 1 || quantity > 10)
    {
        alert("db csak 1 és 10 között")
        message.innerText = 0
    }
    else
    {
        const price = (1500 + extra + sauce)*quantity
        message.innerText = price
    }
}