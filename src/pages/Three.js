import '../gallery.css';
import '../index.css';
import '../bootstrap.css';


const Three = (props) => {

    return ( 

        <div className="three">

            <h1>About this app</h1>

        <span>This app is designed to look up stock prices for various companies publicly traded.</span>
       
        <main>

<div class="container">

    <div class="row">



        <% items.forEach(b => { %>
        <div class="col-md-4, item">
            <p><%= b.item %></p>
            <a class="image" href="<%= b._id %>" target="<%= b.image %>">
                <img src="<%= b.image %>" alt="item" width="60px" height="60px" /> </a>
            <p>Price: $ <%= b.price %></p>
            <p><a href="mailto: <%= b.email %> ">Send Email to <%= b.seller %></a></p>
            <p>Phone: <%= b.phone %></p>
            <form action="/items/<%= b._id %>?_method=DELETE" method="POST">
                <input type="submit" value="DELETE "> </form>
            <div style="padding: 5px;"><button><a href="/items/<%= b._id %>/edit" value="EDIT ">EDIT
                    </a></button></div>
            </form>
        </div>
        <% }) %>


    </div>

</div>








</main>

</div>

    )};


export default Three;