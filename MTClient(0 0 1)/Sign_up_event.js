/*<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.js" integrity="sha512-RjvSEaeDqPCfUVQ9kna2/2OqHz/7F04IOl1/66LmQjB/lOeAzwq7LrbTzDbz5cJzlPNJ5qteNtHR56XaJSTNWw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="Sign_up_event.js"></script>
*/

const form = document.querySelector('.plc')

const submitEvent = (event) => {
    event.preventDefault()
    const input = document.querySelector('.Name')
    console.log(input.value)
    const input1 = document.querySelector('.block2')
    console.log(input1.value)
    const input2 = document.querySelector('.block3')
    console.log(input2.value)
    const body = document.querySelector('.crea')
    axios.post('http://localhost:3000/api/sign_up', {
        "name": input.value,
        'email': input1.value,
        "password": input2.value
    }).then(res => {
        //localStorage.setItem("created", "created")
        window.location.href = 'sign_inghtml.html'
    })

}
form.addEventListener('submit', submitEvent)
