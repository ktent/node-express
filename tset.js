console.log("�ȳ��ϼ��� ��ſ� �����Դϴ�.")
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