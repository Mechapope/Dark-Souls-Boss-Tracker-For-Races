function CreateNew() {

    $("#divPlaceholder").empty();

    var numOfParticipants = parseInt(document.getElementById("txtNumberOfParticipants").value);

    for (var i = 0; i < numOfParticipants; i++) {

        var colSize = 3;

        if (numOfParticipants <= 2) {
            colSize = 6;
        }
        else if (numOfParticipants <= 3) {
            colSize = 4;
        }

        var somuchstring = "<div class='col-lg-" + colSize + " col-md-6 boss-list'><h3 contenteditable='true'> Runner " + (i + 1) + ":</h3>";
        
        somuchstring += "<div class='section-label'>Asylum/Undead Parish</div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Asylum Demon</label></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Taurus Demon</label></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Gargoyles</label></div>" +
            "<div class='section-label'>Anor Londo</div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Iron Golem</label></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Ornstein & Smough</label></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Priscilla</label></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Gwyndolin</label></div>" +
            "<div class='section-label'>Darkroot Basin</div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Sif</label></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Moonlight Butterfly</label></div>" +
            "<div class='Duke's Archives'></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Seath</label></div>" +
            "<div class='section-label'>DLC</div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Sanctuary Guardian</label></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Artorias</label></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Manus</label></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Kalameet</label></div>" +
            "<div class='section-label'>Tomb of the Giants</div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Pinwheel</label></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Nito</label></div>" +
            "<div class='section-label'>Lost Izalith</div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Quelaag</label></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Ceaseless Discharge</label></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Demon Firesage</label></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Centipede Demon</label></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Bed of Chaos</label></div>" +
            "<div class='section-label'>Depths/Asylum Return/The Abyss</div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Stray Demon</label></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Capra Demon</label></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Gaping Dragon</label></div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Four Kings</label></div>" +
            "<div class='section-label'>Kiln of the First Flame</div>" +
            "<div class='boss-checkbox'><label><input type='checkbox'/> Gwyn</label></div>" +
            "</div>";

        $("#divPlaceholder").append(somuchstring);
    }
}