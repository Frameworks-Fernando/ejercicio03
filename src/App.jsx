const app = () => {
  const friends = [ // Agregué el espacio aquí
    { name: 'leevi', age: 4 },
    { name: 'venla', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}

export default app