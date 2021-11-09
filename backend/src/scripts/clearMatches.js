const { connect } = require('../database.js')
const db = connect()

const MATCHES = 'matches'

clearCollection();

async function clearCollection() {
	const matchesRef = db.collection(MATCHES)
	const matchesSnapshot = await matchesRef.get()

	// Om Collection är tom
	if( matchesSnapshot.empty ) {
		console.log('Collection is empty')
		return
	}
		// Om Collection inte är tom så töm
	    matchesSnapshot.forEach(docRef => {
        matchesRef.doc(docRef.id).delete()
		// Vi behöver inte await - inget att vänta på
	})
}