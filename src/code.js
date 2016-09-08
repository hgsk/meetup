/**
 * アイドル運営などが書きがちなベタ書きのスケジュール告知文章からGoogleカレンダーに正規化したデータを取り出してフォームを埋める
 */
function processForm(schedule) {
    // 基本的にplaceholderで入力要求する

    // タイトルっぽいセンテンスを探す（そんなことが可能なのだろうか）
    // とりあえず問答無用で1行目とする

    // 会場っぽいセンテンスを探す
    // 住所があればそれを会場とする
    // 住所かどうかはGoogle Mapに問い合わせるか、手頃な住所確認APIに問い合わせて検証する
    // 建物名があればそれを会場とする
    // 建物かどうかはGoogle Mapに問い合わせて検証する
    // わからなかったら未入力

    // 開催日時を探す
    // 日付っぽいものがあればそれが開催日
    // 時刻の一番若いものがあればそれが開催時刻（日付をまたぐアイドルイベントはあんまりないので）
    // おそらく`開場時刻`を拾うけど、開演時刻よりも安全なのでよしとする
    // 時刻が見つからなければ諦めて全日予定とする

    // 間違って投稿しちゃうかもしれないから、最初は非公開で追加

    title = scanTitle(schedule.raw);
    Logger.log(title);
    address = scanAddress(schedule.raw);
    startDate = scanStartDate(schedule.raw);

    return [title, address, startDate];
}

function scanTitle(paragraph)
{
    return paragraph.split('\n')[0];
}

function scanAddress(paragraph)
{
    return '東京都品川区北品川';
}

function scanStartDate(paragraph)
{
    return new Date().toDateString();
}

function register(schedule) {
    calendar = CalendarApp.getDefaultCalendar();
    Logger.log(calendar.getName());
    event = calendar.createEventFromDescription(schedule.raw);
    return event.getTitle();
}

function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .getContent();
}
