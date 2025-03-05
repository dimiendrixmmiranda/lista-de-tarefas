'use client'
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // Importando o FullCalendar como componente
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ptBR from '@fullcalendar/core/locales/pt-br'; // Importando a localidade pt-br

interface DateClickInfo {
    date: Date; // O objeto Date da data clicada
    dateStr: string; // A data clicada como uma string no formato 'YYYY-MM-DD'
    allDay: boolean; // Se a data clicada é um evento de dia inteiro
    jsEvent: MouseEvent; // O evento JavaScript do clique
}


const CalendarComponent = () => {
    const [events, setEvents] = useState([
        { title: 'Evento 1', date: '2025-03-05' },
        { title: 'Evento 2', date: '2025-03-07' }
    ]);

    const handleDateClick = (info: DateClickInfo) => {
        const title = prompt('Digite o nome do evento:');
        if (title) {
            setEvents([
                ...events,
                { title, date: info.dateStr }
            ]);
        }
    };

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            dateClick={handleDateClick}
            locale={ptBR}
        />
    );
};

export default CalendarComponent;
