            
type HeaderProps = {
  title: string;
  subtitle: string;
};

function Header({ title,subtitle }: HeaderProps ) {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>Organiza tus tareas</p>
    </header>
  );
}

export default Header;