function doGet() {
    return HtmlService.createTemplateFromFile('index')
        .evaluate()
        .setTitle('Meetup')
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);;
}

