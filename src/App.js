import React, { useState } from "react";
import "./styles.css";

const towers = ["А", "Б"];
const floors = Array.from({ length: 25 }, (_, i) => i + 3);
const rooms = Array.from({ length: 10 }, (_, i) => i + 1);

const ReservationForm = () => {
  const [tower, setTower] = useState(towers[0]);
  const [floor, setFloor] = useState(floors[0]);
  const [room, setRoom] = useState(rooms[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationData = {
      tower,
      floor,
      room,
      date,
      time,
      comment
    };
    console.log(reservationData);
  };

  const handleClear = () => {
    setTower(towers[0]);
    setFloor(floors[0]);
    setRoom(rooms[0]);
    setDate("");
    setTime("");
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Выберите башню:
        <select value={tower} onChange={(e) => setTower(e.target.value)}>
          {towers.map((tower) => (
            <option key={tower} value={tower}>
              {tower}
            </option>
          ))}
        </select>
      </label>
      <label>
        Выберите этаж:
        <select value={floor} onChange={(e) => setFloor(e.target.value)}>
          {floors.map((floor) => (
            <option key={floor} value={floor}>
              {floor}
            </option>
          ))}
        </select>
      </label>
      <label>
        Выберите переговорку:
        <select value={room} onChange={(e) => setRoom(e.target.value)}>
          {rooms.map((room) => (
            <option key={room} value={room}>
              {room}
            </option>
          ))}
        </select>
      </label>
      <label>
        Выберите дату:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        Выберите время:
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <label>
        Комментарий:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <div>
        <button type="submit">Отправить</button>
        <button type="button" onClick={handleClear}>
          Очистить
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;

