import { useState } from 'react';

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};

const CalendarIcon = (props) => (
  <svg width={props.size || 16} height={props.size || 16} {...iconProps} {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ChevronDownIcon = (props) => (
  <svg width={props.size || 16} height={props.size || 16} {...iconProps} {...props}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ChevronLeftIcon = (props) => (
  <svg width={props.size || 16} height={props.size || 16} {...iconProps} {...props}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg width={props.size || 16} height={props.size || 16} {...iconProps} {...props}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const SunIcon = (props) => (
  <svg width={props.size || 16} height={props.size || 16} {...iconProps} {...props}>
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const SunriseIcon = (props) => (
  <svg width={props.size || 16} height={props.size || 16} {...iconProps} {...props}>
    <path d="M3 22h18" />
    <path d="M8 17a4 4 0 0 1 8 0" />
    <path d="M12 9V2" />
    <path d="m4 14 2-2" />
    <path d="m20 14-2-2" />
    <path d="M1 18h2" />
    <path d="M21 18h2" />
    <path d="m8 6 4-4 4 4" />
  </svg>
);

const CalendarPlusIcon = (props) => (
  <svg width={props.size || 16} height={props.size || 16} {...iconProps} {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="12" y1="14" x2="12" y2="20" />
    <line x1="9" y1="17" x2="15" y2="17" />
  </svg>
);

const MoonIcon = (props) => (
  <svg width={props.size || 16} height={props.size || 16} {...iconProps} {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

function isSameMonth(a, b) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth();
}

function getCalendarDays(current) {
  const firstOfMonth = new Date(current.getFullYear(), current.getMonth(), 1);
  const firstDay = new Date(firstOfMonth);
  firstDay.setDate(firstDay.getDate() - firstDay.getDay()); // Sunday start
  const days = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(firstDay);
    d.setDate(firstDay.getDate() + i);
    days.push(d);
  }
  return days;
}

export default function CustomDatePicker({ selected, onChange }) {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(selected || new Date());
  const [activeTab, setActiveTab] = useState('Date');

  const days = getCalendarDays(currentMonth);
  const formatDate = (date) =>
    date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const monthLabel = currentMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });

  const handleSelect = (day) => {
    onChange(day);
    setOpen(false);
  };

  const borderColor = open || focused ? '#3b82f6' : '#ccc';

  return (
    <div style={{ position: 'relative', display: 'inline-block', fontSize: '14px' }}>
      <button
        aria-label="Select date"
        type="button"
        onClick={() => setOpen(!open)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          height: '32px',
          padding: '0 8px',
          border: `1px solid ${borderColor}`,
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: selected ? 'center' : 'space-between',
          minWidth: '120px',
          background: '#fff'
        }}
      >
        {selected ? (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#dbeafe',
            color: '#1e3a8a',
            padding: '2px 8px',
            borderRadius: '9999px',
            fontSize: '12px',
            gap: '4px'
          }}>
            <CalendarIcon size={12} />
            <span>{formatDate(selected)}</span>
          </div>
        ) : (
          <>
            <CalendarIcon style={{ color: '#6b7280' }} />
            <ChevronDownIcon style={{ color: '#6b7280' }} />
          </>
        )}
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: '4px',
            width: '280px',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            padding: '8px',
            zIndex: 10
          }}
        >
          {/* Tabs */}
          <div
            style={{
              display: 'flex',
              background: '#f3f4f6',
              borderRadius: '9999px',
              padding: '4px',
              gap: '4px',
              marginBottom: '8px'
            }}
          >
            {['Date', 'Duration'].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  fontSize: '12px',
                  padding: '4px 0',
                  borderRadius: '9999px',
                  background: activeTab === tab ? '#fff' : 'transparent',
                  boxShadow: activeTab === tab ? '0 1px 2px rgba(0,0,0,0.05)' : 'none'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Date' ? (
            <div>
              {/* Icon toolbar */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4,1fr)',
                  gap: '8px',
                  color: '#6b7280',
                  marginBottom: '8px'
                }}
              >
                {[SunIcon, SunriseIcon, CalendarPlusIcon, MoonIcon].map((Icon, idx) => (
                  <button key={idx} type="button" style={{ padding: '4px', display: 'flex', justifyContent: 'center' }}>
                    <Icon />
                  </button>
                ))}
              </div>

              {/* Month navigation */}
              <div style={{ position: 'relative', textAlign: 'center', marginBottom: '8px' }}>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
                  }
                  style={{ position: 'absolute', left: 0, top: 0 }}
                >
                  <ChevronLeftIcon />
                </button>
                <div style={{ fontWeight: 500 }}>{monthLabel}</div>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
                  }
                  style={{ position: 'absolute', right: 0, top: 0 }}
                >
                  <ChevronRightIcon />
                </button>
              </div>

              {/* Weekday header */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7,1fr)',
                  textAlign: 'center',
                  fontSize: '12px',
                  color: '#6b7280',
                  marginBottom: '4px'
                }}
              >
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>

              {/* Days grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7,1fr)',
                  gap: '4px'
                }}
              >
                {days.map((day) => {
                  const inMonth = isSameMonth(day, currentMonth);
                  const isSelected = selected && isSameDay(day, selected);
                  return (
                    <button
                      key={day.toISOString()}
                      type="button"
                      onClick={() => handleSelect(day)}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: isSelected ? '50%' : '4px',
                        background: isSelected ? '#2563eb' : 'transparent',
                        color: isSelected ? '#fff' : inMonth ? '#1f2937' : '#d1d5db',
                        fontSize: '14px'
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) e.currentTarget.style.background = '#f3f4f6';
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      {day.getDate()}
                    </button>
                  );
                })}
              </div>

              {/* Footer menu rows */}
              <div style={{ marginTop: '8px', fontSize: '12px', color: '#6b7280' }}>
                {[
                  ['🕒 Time', 'Time'],
                  ['🔔 Reminder', 'Reminder'],
                  ['🔁 Repeat', 'Repeat']
                ].map(([label, key]) => (
                  <div
                    key={key}
                    style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}
                  >
                    <span>{label}</span>
                    <ChevronRightIcon />
                  </div>
                ))}
              </div>

              {/* Bottom buttons */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '8px',
                  marginTop: '8px'
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    onChange(null);
                    setOpen(false);
                  }}
                  style={{ background: 'transparent', color: '#6b7280', fontSize: '14px' }}
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  style={{
                    background: '#2563eb',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          ) : (
            <div style={{ fontSize: '12px', color: '#6b7280', padding: '16px 0', textAlign: 'center' }}>
              Duration picker goes here…
            </div>
          )}
        </div>
      )}
    </div>
  );
}
