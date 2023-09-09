const Desklet = imports.ui.desklet;
const St = imports.gi.St;
const Lang = imports.lang;
const GLib = imports.gi.GLib;
const Settings = imports.ui.settings;

function MyDesklet(metadata, deskletId) {
    this._init(metadata, deskletId);
}

MyDesklet.prototype = {
    __proto__: Desklet.Desklet.prototype,

    _init: function(metadata, deskletId) {
        Desklet.Desklet.prototype._init.call(this, metadata);

        // Initialize settings
        this.settings = new Settings.DeskletSettings(this, metadata.uuid, deskletId);
        this.settings.bind("wg-interface", "wgInterface", this.onSettingsChanged);

        // Setup UI and check initial WireGuard status
        this.setupUI();
        this.checkWireGuardStatus();
    },

    onSettingsChanged: function() {
        // Actions to perform when settings change
        this.checkWireGuardStatus();
    },

    setupUI: function() {
        this.button = new St.Button({
            style_class: "desklet-button",
            reactive: true,
            can_focus: true,
            track_hover: true
        });

        this.button.connect('clicked', Lang.bind(this, this.toggleWireGuard));
        this.setContent(this.button);
    },

    toggleWireGuard: function() {
        let [result, out, err, status] = GLib.spawn_command_line_sync("ifconfig " + this.wgInterface);
        if (out.toString().includes(this.wgInterface)) {
            [result, out, err, status] = GLib.spawn_command_line_sync("sudo wg-quick down " + this.wgInterface);
        } else {
            [result, out, err, status] = GLib.spawn_command_line_sync("sudo wg-quick up " + this.wgInterface);
        }
        this.checkWireGuardStatus();
    },

    checkWireGuardStatus: function() {
        let [result, out, err, status] = GLib.spawn_command_line_sync("ifconfig " + this.wgInterface);
        if (out.toString().includes(this.wgInterface)) {
            this.button.set_label(this.wgInterface + ": Connected");
            this.button.set_style("background-color: green;");
        } else {
            this.button.set_label(this.wgInterface + ": Disconnected");
            this.button.set_style("background-color: red;");
        }
    },
};

function main(metadata, deskletId) {
    return new MyDesklet(metadata, deskletId);
}

