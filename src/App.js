import React from "react";
import Navegation from "./components/Navegation/Navegation";
import PostCardList from "./components/PostCardList/PostCardList";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import CreateMeal from "./components/CreateMeal/CreateMeal";
import NoPosts from "./components/NoPosts/NoPosts";
import Landing from "./components/Landing/Landing";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignIn: false,
      route: "signin",
      cards: [],
      reserved: [],
      byme: [],
      user: {
        name: "",
        lastname: "",
        email: "",
      },
    };
  }

  loadUser = (user) => {
    this.setState({
      user: {
        name: user.name,
        lastname: user.lastname,
        email: user.email,
      },
    });
    console.log(this.state.user.email);
  };

  updateMealPost = () => {
    fetch("http://localhost:3000/meals")
      .then((response) => response.json())
      .then((data) => this.setState({ cards: data }));
    // this.isSignInChange()
    // console.log(this.state.isSignIn)
  };

  updateReservedPost = () => {
    fetch("http://localhost:3000/reserved", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.user.email,
      }),
    })
      .then((response) => response.json())
      .then((data) => this.setState({ reserved: data }));
  };

  updateByMePost = () => {
    fetch("http://localhost:3000/myposts", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.user.email,
      }),
    })
      .then((response) => response.json())
      .then((data) => this.setState({ byme: data }));
  };

  isSignInChange = () => {
    this.state.isSignIn === false
      ? this.setState({ isSignIn: true })
      : // console.log(this.state.isSignIn)
        this.setState({ isSignIn: false });
    // console.log(this.state.isSignIn)
  };

  onRouteChange = (route) => {
    if (route === "mealposts") {
      this.updateMealPost();
      // this.updateMealPost()
      // this.updateReservedPost()
    } else if (route === "reserved") {
      this.updateReservedPost();
    } else if (route === "postedbyme") {
      this.updateByMePost();
    } else {
      this.updateMealPost();
    }
    this.updateMealPost();
    this.setState({ route: route });
  };

  reservePlate = (index) => {
    if (this.state.route === "mealposts") {
      let plateToSend = {
        id: this.state.cards[index].id,
        platename: this.state.cards[index].platename,
        description: this.state.cards[index].description,
        email: this.state.user.email,
        image: this.state.cards[index].image,
        price: this.state.cards[index].price,
      };

      fetch("http://localhost:3000/reserve", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(plateToSend),
      }).then((response) => {
        this.updateReservedPost();
        this.updateMealPost();
        this.onRouteChange("mealposts");
      });
    } else if (this.state.route === "reserved") {
      fetch("http://localhost:3000/complete", {
        method: "put",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          id: this.state.reserved[index].id,
        }),
      }).then((response) => {
        this.updateReservedPost();
      });
    } else if (this.state.route === "postedbyme") {
      fetch("http://localhost:3000/remove", {
        method: "put",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          id: this.state.byme[index].id,
        }),
      }).then((response) => {
        this.updateByMePost();
      });
    }

    // this.state.reserved.push(this.state.cards[index])
    // this.state.cards.splice(index,1)
  };

  render() {
    console.log(this.state.cards.length, this.state.route);
    const { route } = this.state;
    if (route === "signin") {
      return (
        <div>
          <Navegation
            isSignInChange={this.isSignInChange}
            onRouteChange={this.onRouteChange}
            isSignedIn={this.state.isSignIn}
          />
          <Signin
            loadUser={this.loadUser}
            isSignInChange={this.isSignInChange}
            onRouteChange={this.onRouteChange}
          />
        </div>
      );
    } else if (route === "register") {
      return (
        <div>
          <Navegation
            isSignInChange={this.isSignInChange}
            onRouteChange={this.onRouteChange}
            isSignedIn={this.state.isSignIn}
          />
          <Register
            loadUser={this.loadUser}
            isSignInChange={this.isSignInChange}
            onRouteChange={this.onRouteChange}
          />
        </div>
      );
    } else if (route === "mealposts") {
      if (this.state.cards.length === 0) {
        return (
          <div>
            <Navegation
              isSignInChange={this.isSignInChange}
              onRouteChange={this.onRouteChange}
              isSignedIn={this.state.isSignIn}
            />
            <NoPosts route={route} />
          </div>
        );
      } else {
        return (
          <div>
            <Navegation
              isSignInChange={this.isSignInChange}
              onRouteChange={this.onRouteChange}
              isSignedIn={this.state.isSignIn}
            />
            <PostCardList
              route={this.state.route}
              reservePlate={this.reservePlate}
              cards={this.state.cards}
            />
          </div>
        );
      }
    } else if (route === "postedbyme") {
      if (this.state.byme.length === 0) {
        return (
          <div>
            <Navegation
              isSignInChange={this.isSignInChange}
              onRouteChange={this.onRouteChange}
              isSignedIn={this.state.isSignIn}
            />
            <NoPosts route={route} />
          </div>
        );
      } else {
        return (
          <div>
            <Navegation
              isSignInChange={this.isSignInChange}
              onRouteChange={this.onRouteChange}
              isSignedIn={this.state.isSignIn}
            />
            <PostCardList
              reservePlate={this.reservePlate}
              cards={this.state.byme}
            />
          </div>
        );
      }
    } else if (route === "reserved") {
      if (this.state.reserved.length === 0) {
        return (
          <div>
            <Navegation
              isSignInChange={this.isSignInChange}
              onRouteChange={this.onRouteChange}
              isSignedIn={this.state.isSignIn}
            />
            <NoPosts route={route} />
          </div>
        );
      } else {
        return (
          <div>
            <Navegation
              isSignInChange={this.isSignInChange}
              onRouteChange={this.onRouteChange}
              isSignedIn={this.state.isSignIn}
            />
            <PostCardList
              route={this.state.route}
              reservePlate={this.reservePlate}
              cards={this.state.reserved}
            />
          </div>
        );
      }
    } else if (route === "postameal") {
      return (
        <div>
          <Navegation
            isSignInChange={this.isSignInChange}
            onRouteChange={this.onRouteChange}
            isSignedIn={this.state.isSignIn}
          />
          <CreateMeal
            updateMealPost={this.updateMealPost}
            userEmail={this.state.user.email}
            onRouteChange={this.onRouteChange}
            cards={this.state.cards}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Navegation
            isSignInChange={this.isSignInChange}
            onRouteChange={this.onRouteChange}
            isSignedIn={this.state.isSignIn}
          />
          <Landing />
        </div>
      );
    }
  }
}

export default App;
// <PostCardList cards = {this.state.cards} />
