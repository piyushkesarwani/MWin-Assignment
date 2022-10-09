const images = document.querySelectorAll('.image')
const overlay = document.querySelector('.overlay')
const closeButton = document.querySelector('.closeBtn')
const displayMessage = document.querySelector('.displayMessage')
const container = document.querySelector('.container')
const captchaText = document.querySelector('.captchaText h2')

let clickCount = 0
const numberImagesCorrect = 4

start()

function start() {

    images.forEach(image => {
        image.addEventListener('click', () => {
            if (image.classList.contains('correct')) {
                image.setAttribute('src', "checkbox.png")
                clickCount += 1
                // console.log(clickCount)
                if (clickCount == numberImagesCorrect) {
                    successMessage()
                    replaceAllImages()

                }
            }
            else {
                overlay.classList.add('active')
                displayMessage.innerHTML = 'Verification WRONG! Try AGAIN.'
                // location.reload()
                start()
            }
        })
    })

}

closeButton.addEventListener('click', () => {
    overlay.classList.remove('active')
    start()
})


function successMessage() {
    overlay.classList.remove('active')
    overlay.classList.add('active')
    displayMessage.innerHTML = 'Verification Completed. You are a Human.'
}

function replaceAllImages(){

    captchaText.innerHTML = 'Click on all Images with Cars in it.'

    let i1 = document.getElementById('i1')
    i1.setAttribute('src', "image1.jpg")

    let i2 = document.getElementById('i2')
    i2.setAttribute('src', "image13.jpg")

    let i3 = document.getElementById('i3')
    i3.setAttribute('src', "image2.jpg")

    let i4 = document.getElementById('i4')
    i4.setAttribute('src', "image3.jpg")

    let i5 = document.getElementById('i5')
    i5.setAttribute('src', "image4.jpg")

    let i6 = document.getElementById('i6')
    i6.setAttribute('src', "image5.jpg")

    let i7 = document.getElementById('i7')
    i7.setAttribute('src', "image14.jpg") 

    let i8 = document.getElementById('i8')
    i8.setAttribute('src', "image6.jpg")

    let i9 = document.getElementById('i9')
    i9.setAttribute('src', "image7.jpg")

    let i10 = document.getElementById('i10')
    i10.setAttribute('src', "image8.jpg")

    let i11 = document.getElementById('i11')
    i11.setAttribute('src', "image9.jpg")

    let i12 = document.getElementById('i12')
    i12.setAttribute('src', "image10.jpg")

    let i13 = document.getElementById('i13')
    i13.setAttribute('src', "image11.jpg")

    let i14 = document.getElementById('i14')
    i14.setAttribute('src', "image15.jpg") 

    let i15 = document.getElementById('i15')
    i15.setAttribute('src', "image16.jpg") 

    let i16 = document.getElementById('i16')
    i16.setAttribute('src', "image12.jpg")
    start()
}