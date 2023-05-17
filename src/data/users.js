const users = [
  {
    employeeNumber: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  },
  {
    employeeNumber: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    phone: '098-765-4321',
  },
  {
    employeeNumber: 3,
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice.smith@example.com',
    phone: '555-123-4567',
  },
  {
    employeeNumber: 4,
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bob.johnson@example.com',
    phone: '222-987-6543',
  },
  {
    employeeNumber: 5,
    firstName: 'Emily',
    lastName: 'Williams',
    email: 'emily.williams@example.com',
    phone: '777-555-1234',
  },
];
  
const usersWithInitials = users.map(user => ({
  ...user,
  initials: `${user.firstName[0]}${user.lastName[0]}`,
}));

export const getUsers = () => usersWithInitials;
