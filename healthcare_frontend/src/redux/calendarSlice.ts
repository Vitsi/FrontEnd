import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  resource: string;
 // doctorFullName: string;
}

interface CalendarState {
  events: CustomEvent[];
}

const initialState: CalendarState = {
  events: JSON.parse(localStorage.getItem('calendarEvents') || '[]'),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<CustomEvent>) => {
      state.events.push(action.payload);
      localStorage.setItem('calendarEvents', JSON.stringify(state.events));
    },
    updateEvent: (state, action: PayloadAction<CustomEvent>) => {
      const index = state.events.findIndex(event => event.id === action.payload.id);
      if (index !== -1) {
        state.events[index] = action.payload;
        localStorage.setItem('calendarEvents', JSON.stringify(state.events));
      }
      
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter(event => event.id !== action.payload);
      localStorage.setItem('calendarEvents', JSON.stringify(state.events));
    },
    setEvents: (state, action: PayloadAction<CustomEvent[]>) => {
      state.events = action.payload;
      localStorage.setItem('calendarEvents', JSON.stringify(state.events));
    }
  },
});

export const { addEvent, updateEvent, deleteEvent, setEvents } = calendarSlice.actions;
export default calendarSlice.reducer;
