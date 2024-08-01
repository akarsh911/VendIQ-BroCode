import React from 'react';
import './CallLogs.css';

// Contact component to represent individual contacts
function Contact({ name, phone }) {
  return (
    <div className='details'>
      <div className='detailsText'>
        <h3>
          {name}
          <br />
          <span>{phone}</span>
        </h3>
      </div>

      <h3 className='revertButton'>Revert</h3>
    </div>
  );
}

// ContactList component to render a list of contacts
function ContactList({ contacts }) {
  return (
    <div className='mid'>
      {contacts.map((contact, index) => (
        <Contact key={index} name={contact.name} phone={contact.phone} />
      ))}
    </div>
  );
}

// BottomBar component to render bottom options
function BottomBar() {
  return (
    <div className='bottom'>
      <h3>All</h3>
      <h3>Missed</h3>
    </div>
  );
}

// Main App component
function CallLogs() {
  const contacts = [
    { name: 'Harris Morgan', phone: '+1x 1234567891' },
    { name: 'John Morgan', phone: '+1x 1234567891' },
    { name: 'Office', phone: '+1x 1234567891' },
    { name: 'Home', phone: '+1x 1234567891' },
    { name: 'Ron bro', phone: '+1x 1234567891' },
    { name: 'Uncle', phone: '+1x 1234567891' },
  ];

  return (
    <div className='content'>
      <h2 className='contactList insideContent'>Contact List</h2>
      <ContactList className='insideContent' contacts={contacts} />
      <BottomBar />
    </div>
  );
}

export default CallLogs;
