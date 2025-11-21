import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface DayActivity {
    day: string;
    active: boolean;
    value: number;
}

interface ChallengeCompleted {
    groupName: string;
    challenges: string[];
}

@Component({
    selector: 'app-estadisticas',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './estadisticas.component.html',
    styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent {
    // Mock data for calendar
    calendarDays: DayActivity[] = [
        { day: 'D', active: false, value: 12 },
        { day: 'L', active: true, value: 13 },
        { day: 'M', active: true, value: 14 },
        { day: 'M', active: true, value: 15 },
        { day: 'J', active: true, value: 16 },
        { day: 'V', active: true, value: 17 },
        { day: 'S', active: false, value: 18 },

        { day: 'D', active: false, value: 19 },
        { day: 'L', active: true, value: 20 },
        { day: 'M', active: true, value: 21 },
        { day: 'M', active: true, value: 22 },
        { day: 'J', active: true, value: 23 },
        { day: 'V', active: true, value: 24 },
        { day: 'S', active: false, value: 25 },

        { day: 'D', active: false, value: 26 },
        { day: 'L', active: true, value: 27 },
        { day: 'M', active: true, value: 28 },
        { day: 'M', active: true, value: 29 },
        { day: 'J', active: true, value: 30 },
        { day: 'V', active: false, value: 1 },
        { day: 'S', active: false, value: 2 }
    ];

    // Mock data for completed challenges
    completedChallenges: ChallengeCompleted[] = [
        {
            groupName: 'Cycling Team New Gen',
            challenges: ['50k sobre ruedas']
        },
        {
            groupName: 'Gimnasio Real Club',
            challenges: ['Abs de acero', 'Full body express']
        }
    ];
}
