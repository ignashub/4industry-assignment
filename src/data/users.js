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
  ];
  
const usersWithInitials = users.map(user => ({
  ...user,
  initials: `${user.firstName[0]}${user.lastName[0]}`,
}));

export const getUsers = () => usersWithInitials;
