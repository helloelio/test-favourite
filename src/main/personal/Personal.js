function PersonalTable(props) {
  return (
    <tr>
      <td>{props.persona.name}</td>
      <td>{props.persona.number}</td>
    </tr>
  );
}
export default PersonalTable;
