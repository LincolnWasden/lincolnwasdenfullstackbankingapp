function Home(){
  const ctx = React.useContext(UserContext);
  let i = ctx.user.length - 1;
  const account = ctx.user[i];
 
    console.log(ctx.user)

  const header  = `current user: ${account.email}`
  return (
    <Card
      txtcolor="light"
      bgcolor="primary"
      header="Bad Bank Lets Make Money - Lincoln"
      title="Welcome to Bad Bank Corporation By Lincoln"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}
