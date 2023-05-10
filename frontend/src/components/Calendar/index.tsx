import { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { useMessageBox, useWeekStartDayjs } from '@/hooks';
import WeekHeader from './WeekHeader';
import WeekView from '..';
import styles from './Calendar.module.scss';

interface CalendarProps {}
type ViewMode = 'month' | 'week' | 'day';

export default function Calendar({}: CalendarProps) {
  // const [startDate, setStartDate] = useDayjs();
  // const today = dayjs();
  // const startDate = today.subtract(today.day(), 'day');

  const [startDate, setStartDate] = useWeekStartDayjs();
  const [viewMode, setViewMode] = useState<ViewMode>('week');

  const [, pushMessage] = useMessageBox();
  const wrapRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.calendarWrap} ref={wrapRef}>
      <WeekHeader />
      <WeekView />
    </div>
  );
}
