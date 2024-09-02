const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Attendance = require('./models/Attendance'); // Attendance 모델을 사용하는 경우

const app = express(); // app 객체를 정의합니다.
const port = process.env.PORT || 3000; // 환경 변수에서 포트 번호를 가져오거나 기본값을 설정합니다.

app.use(bodyParser.json()); // JSON 요청 본문을 파싱합니다.

// MongoDB 연결
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/attendance', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// 테스트 엔드포인트 추가
app.post("/test", function (req, res) {
    return res.send({
        version: "2.0",
        template: {
            outputs: [
                {
                    basicCard: {
                        title: "간단한 텍스트와 버튼요소",
                        description: "간단한 버튼과 텍스트입니다",
                        buttons: [
                            {
                                action: "message",
                                label: "열어보기"
                            }
                        ]
                    }
                }
            ]
        }
    });
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
