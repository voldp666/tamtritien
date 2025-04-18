document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Hiển thị tin nhắn của người dùng
    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('div');
    userMessage.textContent = 'Bạn: ' + userInput;
    chatBox.appendChild(userMessage);

    // Xóa input
    document.getElementById('user-input').value = '';

    // Giả lập phản hồi từ chatbot
    const botMessage = document.createElement('div');
    botMessage.textContent = 'Chatbot: ' + simulateBotResponse(userInput);
    chatBox.appendChild(botMessage);

    // Cuộn xuống cuối chat box
    chatBox.scrollTop = chatBox.scrollHeight;
});

// Hàm giả lập phản hồi của chatbot
function simulateBotResponse(input) {
    // Đây là nơi bạn có thể tích hợp logic để trả lời dựa trên dữ liệu văn hóa doanh nghiệp
    return "Đây là phản hồi từ chatbot cho câu hỏi: " + input;
}
