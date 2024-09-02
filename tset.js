console.log("hi enjoy today.")
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
