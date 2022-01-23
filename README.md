# Aerofole
A simple accordion component built with react  

npm i aerofole  
  
## use
<code>  
import Aerofole from 'aerofole';  

function App() {  
  return (  

    <div className="App">
        ...
        <Aerofole title="planets" background="blue" color= "white">
            <ul style={{ background: "white", color:"blue" }}>
                <li>Mercury</li>
                <li>Venus</li>
                <li>Earth</li>
                <li>Mars</li>
            </ul>
        </Aerofole>
        ...
    </div>
  );
}
</code>

![aerofole in action](./aerofole.jpg)

## Publish process
npm version patch
npm run build  
npm pack  
npm publish  

-------------    
<br/>  
Alex Alves  