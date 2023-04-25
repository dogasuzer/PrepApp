// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, TextInput, Button } from "react-native";
// import { Amplify, API, graphqlOperation, Hub } from "aws-amplify";
// import { CONNECTION_STATE_CHANGE, ConnectionState } from "@aws-amplify/pubsub";
// import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
// import awsconfig from "./src/aws-exports";
// import * as queries from "./src/graphql/queries";
// import * as mutations from "./src/graphql/mutations";
// import * as subscriptions from "./src/graphql/subscriptions";

// Amplify.configure(awsconfig);

// const initialState = { name: "", description: "" };

// const App = () => {
//   const [formState, setFormState] = useState(initialState);
//   const [preps, setPreps] = useState([]);

//   useEffect(() => {
//     let priorConnectionState;

//     Hub.listen("api", (data) => {
//       const { payload } = data;
//       if (payload.event === CONNECTION_STATE_CHANGE) {
//         if (
//           priorConnectionState === ConnectionState.Connecting &&
//           payload.data.connectionState === ConnectionState.Connected
//         ) {
//           fetchPreps();
//         }
//         priorConnectionState = payload.data.connectionState;
//       }
//     });

//     const createSub = API.graphql({
//       query: subscriptions.onCreatePrep,
//       authMode: GRAPHQL_AUTH_MODE.API_KEY,
//     }).subscribe({
//       next: (data) => {
//         console.log("createsub" + data.value.data.onCreatePrep);
//         const newInput = {
//           name: data.value.data.onCreatePrep.name,
//           description: data.value.data.onCreatePrep.description,
//         };
//         setPreps([...preps, newInput]);
//       },
//       error: (error) => console.warn(error), // Process incoming messages
//     });

//     const updateSub = API.graphql({
//       query: subscriptions.onUpdatePrep,
//       authMode: GRAPHQL_AUTH_MODE.API_KEY,
//     }).subscribe({
//       next: (data) => console.log("Process incoming messages" + data), // Process incoming messages
//     });

//     const deleteSub = API.graphql({
//       query: subscriptions.onDeletePrep,
//       authMode: GRAPHQL_AUTH_MODE.API_KEY,
//     }).subscribe({
//       next: (data) => console.log("Process incoming messages" + data), // Process incoming messages
//     });

//     return function cleanup() {
//       createSub.unsubscribe();
//       updateSub.unsubscribe();
//       deleteSub.unsubscribe();
//     };
//   }, []);

//   useEffect(() => {
//     fetchPreps();
//   }, []);

//   function setInput(key, value) {
//     setFormState({ ...formState, [key]: value });
//   }

//   async function fetchPreps() {
//     try {
//       const allPreps = await API.graphql({
//         query: queries.listPreps,
//         authMode: GRAPHQL_AUTH_MODE.API_KEY,
//       });
//       console.log("fetch" + allPreps);
//       const PrepsList = allPreps.data.listPreps.items;
//       setPreps(PrepsList);
//     } catch (err) {
//       console.log("error fetching Preps now");
//     }
//   }

//   async function addPrep() {
//     try {
//       const prep = { ...formState };
//       setFormState(initialState);

//       const newPrep = await API.graphql({
//         query: mutations.createPrep,
//         variables: {
//           input: {
//             name: formState.name,
//             description: formState.description,
//           },
//         },
//         authMode: GRAPHQL_AUTH_MODE.API_KEY,
//       });
//     } catch (err) {
//       console.log("error creating Prep:", err);
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <TextInput
//         onChangeText={(val) => setInput("name", val)}
//         style={styles.input}
//         value={formState.name}
//         placeholder="Name"
//       />
//       <TextInput
//         onChangeText={(val) => setInput("totalTime", val)}
//         style={styles.input}
//         value={formState.description}
//         placeholder="Cook time"
//       />

//       <Button title="Add a Ingredient" onPress={addPrep} />
//       <Button title="Add a Step" onPress={addPrep} />
//       <Button title="Create Prep!" onPress={addPrep} />
//       {/*
//       id
//       name
//       steps
//       ingredients
//       totalTime
//       createdAt
//       updatedAt */}

//       <View style={styles.prepListWrapper}>
//         {preps.map((prep, index) => (
//           <View key={prep.id ? prep.id : index} style={styles.prep}>
//             <Text style={styles.prepName}>{prep.name}</Text>
//             <Text>{prep.description}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 40,
//     justifyContent: "flex-start",
//     padding: 20,
//   },
//   prep: {
//     marginBottom: 15,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 10,
//     height: 50,
//     backgroundColor: "#fff",
//     marginBottom: 10,
//     padding: 8,
//   },
//   prepListWrapper: { marginTop: 20 },
//   prepName: { fontSize: 18 },
// });

// export default App;
