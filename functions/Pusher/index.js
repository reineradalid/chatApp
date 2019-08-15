import Pusher from 'pusher-js/react-native';

export function PUSHER(){

    Pusher.logToConsole = true;

    var pusher = new Pusher('c35a3f466eb98e23c0e7', {
    cluster: 'ap1',
    forceTLS: true
    });

    var channel = pusher.subscribe('my-channel');

    return channel;
}

