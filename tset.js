const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Attendance = require('./models/Attendance'); // Attendance ���� ����ϴ� ���

const app = express(); // app ��ü�� �����մϴ�.
const port = process.env.PORT || 3000; // ȯ�� �������� ��Ʈ ��ȣ�� �������ų� �⺻���� �����մϴ�.

app.use(bodyParser.json()); // JSON ��û ������ �Ľ��մϴ�.

// MongoDB ����
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/attendance', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// �׽�Ʈ ��������Ʈ �߰�
app.post("/test", function (req, res) {
    return res.send({
        version: "2.0",
        template: {
            outputs: [
                {
                    basicCard: {
                        title: "������ �ؽ�Ʈ�� ��ư���",
                        description: "������ ��ư�� �ؽ�Ʈ�Դϴ�",
                        buttons: [
                            {
                                action: "message",
                                label: "�����"
                            }
                        ]
                    }
                }
            ]
        }
    });
});

// ���� ����
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
