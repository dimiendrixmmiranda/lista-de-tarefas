'use client'
import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import ptBR from '@fullcalendar/core/locales/pt-br'
import { Dialog } from 'primereact/dialog';

export default function CalendarComponent({ events }: { events: { title: string; date: string }[] }) {
    const [visible, setVisible] = useState(false);
    const [filteredEvents, setFilteredEvents] = useState<{ title: string; date: string }[]>([]);
    const [selectedDate, setSelectedDate] = useState<string>('');

    const handleDateClick = (arg: { dateStr: string }) => {
        const clickedDate = arg.dateStr;
        setSelectedDate(clickedDate);
        const tasksForTheDay = events.filter(event => event.date === clickedDate);
        setFilteredEvents(tasksForTheDay);
        setVisible(true);
    };

    return (
        <div className='p-4'>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                locale={ptBR}
                dateClick={handleDateClick}
            />
            <div className="card flex justify-content-center">
                <Dialog
                    header={`Tarefas do dia ${selectedDate}`}
                    visible={visible}
                    onHide={() => setVisible(false)}
                    className='w-[95%] max-w-[500px] h-[300px] bg-[--azul-escuro] p-4 rounded-lg'>
                    <div className='flex flex-col gap-2 mt-4'>
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map((event, index) => (
                                <p key={index} className='bg-[--azul-claro] p-2 rounded-lg' style={{textShadow: '1px 1px 2px black'}}>{event.title}</p>
                            ))
                        ) : (
                            <p className='uppercase font-bold text-2xl text-center'>Nenhuma tarefa para este dia!</p>
                        )}
                    </div>
                </Dialog>
            </div>
        </div>
    );
}
