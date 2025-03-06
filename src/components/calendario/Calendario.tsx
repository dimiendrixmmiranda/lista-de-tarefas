'use client'
import React from 'react';
import FullCalendar from '@fullcalendar/react'; // Importando o FullCalendar como componente
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ptBR from '@fullcalendar/core/locales/pt-br'; // Importando a localidade pt-br


const CalendarComponent = ({ events }: { events: { title: string; date: string }[] }) => {
    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            locale={ptBR}
        />
    );
};

export default CalendarComponent;
