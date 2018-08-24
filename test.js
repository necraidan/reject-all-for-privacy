/*function yolo() {
    console.log('here');
    $('.qc-cmp-toggle.qc-cmp-toggle-on').click();
    console.log($('.qc-cmp-toggle.qc-cmp-toggle-on'));
}
*/

console.log('here');
console.log(chrome);
console.log(chrome.extension.getBackgroundPage());
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', yolo);
});
function yolo() {
    console.log('here');
    chrome.tabs.executeScript(null, { code: "document.querySelectorAll('.qc-cmp-toggle.qc-cmp-toggle-on').forEach(function(e){e.click()})" });

    /*[].forEach.call(document.querySelectorAll('.qc-cmp-toggle.qc-cmp-toggle-on'), function(el) {
        el.addEventListener('click', function() {});
    });*/
}
