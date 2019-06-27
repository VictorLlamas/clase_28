window.addEventListener("load", setup);

function createFormData(){
    const formData = new FormData()
    const name = document.querySelector('input[name="username"]').value
    formData.append('name', name)
    const avatar = document.querySelector('input[name="avatar"]').files[0]
    formData.append('avatar', avatar)
    return formData
}

function saveProfile(event){
    event.preventDefault()
    const formData = createFormData()
    sendFormData('http://localhost:9000/profile', formData)
        .then(console.log)
        .catch(console.error)
}

function sendFormData(url, formData){
    return fetch(url, {
        method: 'PUT',
        body: formData
    })
}
function setup(){
    const form = document.querySelector('form')
    form.addEventListener('submit', saveProfile)
}

