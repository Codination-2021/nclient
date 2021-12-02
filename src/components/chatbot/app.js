const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: '<img src="./images/image.jpg" height="50px" width="50px"/>',
    isNotClicked: '<img src="./images/image.jpg" height="50px" width="50px"/>'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);