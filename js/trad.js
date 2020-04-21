var nbr_serv = $(document).find(".number_join").text().replace(/[^0-9]/gi, '');
var number = parseInt(nbr_serv, 10);

$("#lang_1").click(function() {
    $(document).find(".download_label").text("изтегляне");
    $(document).find(".invit").text("покани");
    $(document).find(".inv span").text("покани");
    $(document).find(".vote").text("гласуване");
    $(document).find(".vo span").text("гласуване");
    $(document).find(".number_join").text("Свързани са " + number + " сървъра");
});

$("#lang_2").click(function() {
    $(document).find(".download_label").text("Stáhnout");
    $(document).find(".invit").text("Pozvat");
    $(document).find(".inv span").text("Pozvat");
    $(document).find(".vote").text("Hlasujte");
    $(document).find(".vo span").text("Hlasujte");
    $(document).find(".number_join").text("Připojilo se " + number + " serverů");
});

$("#lang_3").click(function() {
    $(document).find(".download_label").text("Downloade");
    $(document).find(".invit").text("Invitere");
    $(document).find(".inv span").text("Invitere");
    $(document).find(".vote").text("Stem");
    $(document).find(".vo span").text("Stem");
    $(document).find(".number_join").text(number + " server blev medlem");
});

$("#lang_4").click(function() {
    $(document).find(".download_label").text("Herunterladen");
    $(document).find(".invit").text("Laden Sie ein");
    $(document).find(".inv span").text("Laden Sie ein");
    $(document).find(".vote").text("Abstimmung");
    $(document).find(".vo span").text("Abstimmung");
    $(document).find(".number_join").text(number + " Server beigetreten");
});

$("#lang_5").click(function() {
    $(document).find(".download_label").text("Λήψη");
    $(document).find(".invit").text("Προσκαλέστε");
    $(document).find(".inv span").text("Προσκαλέστε");
    $(document).find(".vote").text("Ψηφίστε");
    $(document).find(".vo span").text("Ψηφίστε");
    $(document).find(".number_join").text("Έχουν ενταχθεί " + number + " διακομιστές");
});

$("#lang_6").click(function() {
    $(document).find(".download_label").text("Download");
    $(document).find(".invit").text("Invite");
    $(document).find(".inv span").text("Invite");
    $(document).find(".vote").text("Vote");
    $(document).find(".vo span").text("Vote");
    $(document).find(".number_join").text(number + " servers joined");
});

$("#lang_7").click(function() {
    $(document).find(".download_label").text("Descargue");
    $(document).find(".invit").text("Invitar a");
    $(document).find(".inv span").text("Invitar a");
    $(document).find(".vote").text("Vota");
    $(document).find(".vo span").text("Vota");
    $(document).find(".number_join").text(number + " servidores alcanzados");
});

$("#lang_8").click(function() {
    $(document).find(".download_label").text("Download");
    $(document).find(".invit").text("Kutsu");
    $(document).find(".inv span").text("Kutsu");
    $(document).find(".vote").text("Äänestys");
    $(document).find(".vo span").text("Äänestys");
    $(document).find(".number_join").text(number + " palvelinta liittyi");
});

$("#lang_9").click(function() {
    $(document).find(".download_label").text("Télécharger");
    $(document).find(".invit").text("Inviter");
    $(document).find(".inv span").text("Inviter");
    $(document).find(".vote").text("Voter");
    $(document).find(".vo span").text("Voter");
    $(document).find(".number_join").text(number + " serveurs rejoints");
});

$("#lang_10").click(function() {
    $(document).find(".download_label").text("Preuzimanje");
    $(document).find(".invit").text("Pozvati");
    $(document).find(".inv span").text("Pozvati");
    $(document).find(".vote").text("Glasajte");
    $(document).find(".vo span").text("Glasajte");
    $(document).find(".number_join").text("Pridružilo se " + number + " poslužitelja");
});

$("#lang_11").click(function() {
    $(document).find(".download_label").text("Letöltés");
    $(document).find(".invit").text("Meghív");
    $(document).find(".inv span").text("Meghív");
    $(document).find(".vote").text("Szavazás");
    $(document).find(".vo span").text("Szavazás");
    $(document).find(".number_join").text(number + " szerver csatlakozott");
});

$("#lang_12").click(function() {
    $(document).find(".download_label").text("Scarica");
    $(document).find(".invit").text("Invitare");
    $(document).find(".inv span").text("Invitare");
    $(document).find(".vote").text("Voto");
    $(document).find(".vo span").text("Voto");
    $(document).find(".number_join").text(number + " server uniti");
});

$("#lang_13").click(function() {
    $(document).find(".download_label").text("ダウンロードする");
    $(document).find(".invit").text("招待する");
    $(document).find(".inv span").text("招待する");
    $(document).find(".vote").text("投票する");
    $(document).find(".vo span").text("投票する");
    $(document).find(".number_join").text(number + " 台のサーバーが参加");
});

$("#lang_14").click(function() {
    $(document).find(".download_label").text("다운로드");
    $(document).find(".invit").text("초대");
    $(document).find(".inv span").text("초대");
    $(document).find(".vote").text("투표");
    $(document).find(".vo span").text("투표");
    $(document).find(".number_join").text(number + " 서버 가입");
});

$("#lang_15").click(function() {
    $(document).find(".download_label").text("Atsisiųsti");
    $(document).find(".invit").text("Pakviesk");
    $(document).find(".inv span").text("Pakviesk");
    $(document).find(".vote").text("Balsavimas");
    $(document).find(".vo span").text("Balsavimas");
    $(document).find(".number_join").text("Prisijungė " + number + " serveriai");
});

$("#lang_16").click(function() {
    $(document).find(".download_label").text("Downloaden");
    $(document).find(".invit").text("Nodig uit");
    $(document).find(".inv span").text("Nodig uit");
    $(document).find(".vote").text("Stem");
    $(document).find(".vo span").text("Stem");
    $(document).find(".number_join").text(number + " servers zijn lid geworden");
});

$("#lang_17").click(function() {
    $(document).find(".download_label").text("Nedlasting");
    $(document).find(".invit").text("Invitere");
    $(document).find(".inv span").text("Invitere");
    $(document).find(".vote").text("Stem");
    $(document).find(".vo span").text("Stem");
    $(document).find(".number_join").text(number + " servere ble med");
});

$("#lang_18").click(function() {
    $(document).find(".download_label").text("Pobierz");
    $(document).find(".invit").text("Zaproś");
    $(document).find(".inv span").text("Zaproś");
    $(document).find(".vote").text("Głosuj");
    $(document).find(".vo span").text("Głosuj");
    $(document).find(".number_join").text("Dołączyło " + number + " serwerów");
});

$("#lang_19").click(function() {
    $(document).find(".download_label").text("Baixar");
    $(document).find(".invit").text("Convidar");
    $(document).find(".inv span").text("Convidar");
    $(document).find(".vote").text("Votar");
    $(document).find(".vo span").text("Votar");
    $(document).find(".number_join").text(number + " servidores ingressaram");
});

$("#lang_20").click(function() {
    $(document).find(".download_label").text("Descărcați");
    $(document).find(".invit").text("Invita");
    $(document).find(".inv span").text("Invita");
    $(document).find(".vote").text("Vot");
    $(document).find(".vo span").text("Vot");
    $(document).find(".number_join").text("S-au alăturat " + number + " servere");
});

$("#lang_21").click(function() {
    $(document).find(".download_label").text("скачать");
    $(document).find(".invit").text("приглашать");
    $(document).find(".inv span").text("приглашать");
    $(document).find(".vote").text("голосование");
    $(document).find(".vo span").text("голосование");
    $(document).find(".number_join").text(number + " серверов присоединились");
});

$("#lang_22").click(function() {
    $(document).find(".download_label").text("Nedladdning");
    $(document).find(".invit").text("Inbjuda");
    $(document).find(".inv span").text("Inbjuda");
    $(document).find(".vote").text("Rösta");
    $(document).find(".vo span").text("Rösta");
    $(document).find(".number_join").text(number + " servrar gick med");
});

$("#lang_23").click(function() {
    $(document).find(".download_label").text("Nedladdning");
    $(document).find(".invit").text("เชิญ");
    $(document).find(".inv span").text("เชิญ");
    $(document).find(".vote").text("โหวต");
    $(document).find(".vo span").text("โหวต");
    $(document).find(".number_join").text("เข้าร่วม " + number + " เซิร์ฟเวอร์");
});

$("#lang_24").click(function() {
    $(document).find(".download_label").text("Indir");
    $(document).find(".invit").text("Davet etmek");
    $(document).find(".inv span").text("Davet etmek");
    $(document).find(".vote").text("Oy");
    $(document).find(".vo span").text("Oy");
    $(document).find(".number_join").text(number + " sunucu katıldı");
});

$("#lang_25").click(function() {
    $(document).find(".download_label").text("Завантажити");
    $(document).find(".invit").text("Запросити");
    $(document).find(".inv span").text("Запросити");
    $(document).find(".vote").text("Голосувати");
    $(document).find(".vo span").text("Голосувати");
    $(document).find(".number_join").text("Приєдналося " + number + " серверів");
});

$("#lang_26").click(function() {
    $(document).find(".download_label").text("Tải xuống");
    $(document).find(".invit").text("Mời");
    $(document).find(".inv span").text("Mời");
    $(document).find(".vote").text("Bình chọn");
    $(document).find(".vo span").text("Bình chọn");
    $(document).find(".number_join").text(number + " máy chủ tham gia");
});

$("#lang_27").click(function() {
    $(document).find(".download_label").text("资料下载");
    $(document).find(".invit").text("邀请");
    $(document).find(".inv span").text("邀请");
    $(document).find(".vote").text("投票");
    $(document).find(".vo span").text("投票");
    $(document).find(".number_join").text(number + "台服务器加入");
});

$("#lang_28").click(function() {
    $(document).find(".download_label").text("資料下載");
    $(document).find(".invit").text("邀請");
    $(document).find(".inv span").text("邀請");
    $(document).find(".vote").text("投票");
    $(document).find(".vo span").text("投票");
    $(document).find(".number_join").text(number + "台服務器加入");
});