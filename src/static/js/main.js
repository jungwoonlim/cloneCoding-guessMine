(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        throw new Error("Cannot find module '" + o + "'");
      }
      var f = (n[o] = { exports: {} });
      t[o][0].call(
        f.exports,
        function(e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        },
        f,
        f.exports,
        e,
        t,
        n,
        r
      );
    }
    return n[o].exports;
  }
  var i = typeof require == "function" && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
})(
  {
    1: [
      function(require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.handleMessageNotif = void 0;

        var handleMessageNotif = function handleMessageNotif(data) {
          var message = data.message,
            nickname = data.nickname;
          console.log("".concat(nickname, ": ").concat(message));
        };

        exports.handleMessageNotif = handleMessageNotif;
        //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLElBQUksRUFBSTtBQUFBLE1BQ2hDQyxPQURnQyxHQUNWRCxJQURVLENBQ2hDQyxPQURnQztBQUFBLE1BQ3ZCQyxRQUR1QixHQUNWRixJQURVLENBQ3ZCRSxRQUR1QjtBQUV4Q0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWVGLFFBQWYsZUFBNEJELE9BQTVCO0FBQ0QsQ0FITSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBoYW5kbGVNZXNzYWdlTm90aWYgPSBkYXRhID0+IHtcbiAgY29uc3QgeyBtZXNzYWdlLCBuaWNrbmFtZSB9ID0gZGF0YTtcbiAgY29uc29sZS5sb2coYCR7bmlja25hbWV9OiAke21lc3NhZ2V9YCk7XG59O1xuIl19
      },
      {}
    ],
    2: [
      function(require, module, exports) {
        "use strict";

        var _chat = require("./chat");

        var socket = io("/");
        socket.on("hello", function() {
          return console.log("Somebody joined");
        });

        var sendMessage = function sendMessage(message) {
          socket.emit("newMessage", {
            message: message
          });
          console.log("You: ".concat(message));
        };

        var setNickname = function setNickname(nickname) {
          socket.emit("setNickname", {
            nickname: nickname
          });
        };

        socket.on("messageNotif", _chat.handleMessageNotif);
        //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfN2EwZTA1M2IuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0Iiwic2V0Tmlja25hbWUiLCJuaWNrbmFtZSIsImhhbmRsZU1lc3NhZ2VOb3RpZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCO0FBRUFELE1BQU0sQ0FBQ0UsRUFBUCxDQUFVLE9BQVYsRUFBbUI7QUFBQSxTQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixDQUFOO0FBQUEsQ0FBbkI7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsT0FBTyxFQUFJO0FBQzdCTixFQUFBQSxNQUFNLENBQUNPLElBQVAsQ0FBWSxZQUFaLEVBQTBCO0FBQUVELElBQUFBLE9BQU8sRUFBUEE7QUFBRixHQUExQjtBQUNBSCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsZ0JBQW9CRSxPQUFwQjtBQUNELENBSEQ7O0FBS0EsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsUUFBUSxFQUFJO0FBQzlCVCxFQUFBQSxNQUFNLENBQUNPLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQUVFLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUEzQjtBQUNELENBRkQ7O0FBSUFULE1BQU0sQ0FBQ0UsRUFBUCxDQUFVLGNBQVYsRUFBMEJRLHdCQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU1lc3NhZ2VOb3RpZiB9IGZyb20gXCIuL2NoYXRcIjtcblxuY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xuXG5zb2NrZXQub24oXCJoZWxsb1wiLCAoKSA9PiBjb25zb2xlLmxvZyhcIlNvbWVib2R5IGpvaW5lZFwiKSk7XG5cbmNvbnN0IHNlbmRNZXNzYWdlID0gbWVzc2FnZSA9PiB7XG4gIHNvY2tldC5lbWl0KFwibmV3TWVzc2FnZVwiLCB7IG1lc3NhZ2UgfSk7XG4gIGNvbnNvbGUubG9nKGBZb3U6ICR7bWVzc2FnZX1gKTtcbn07XG5cbmNvbnN0IHNldE5pY2tuYW1lID0gbmlja25hbWUgPT4ge1xuICBzb2NrZXQuZW1pdChcInNldE5pY2tuYW1lXCIsIHsgbmlja25hbWUgfSk7XG59O1xuXG5zb2NrZXQub24oXCJtZXNzYWdlTm90aWZcIiwgaGFuZGxlTWVzc2FnZU5vdGlmKTtcbiJdfQ==
      },
      { "./chat": 1 }
    ]
  },
  {},
  [2]
);
