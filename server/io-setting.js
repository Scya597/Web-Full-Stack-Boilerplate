import { setting, socketTask as task } from '../config-io';

const data = {
  username: 'Samuel',
  password: 'password',
};

const ioActivate = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on(task.INIT, () => {
      console.log('INIT');
    });

    socket.on(task.STATE_UPDATE, (state) => {
      console.log(state);
    });

    socket.on(task.GET_DATA, () => {
      socket.emit(task.ACCEPT_DATA, data);
      io.emit(task.ACCEPT_NEW_MESSAGE, 'ONE CLIENT HAS ACCEPTED DATA');
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  setInterval(() => {
    // console.log('You Can Put Logic Here.');
  }, setting.dt);
};

export default ioActivate;
