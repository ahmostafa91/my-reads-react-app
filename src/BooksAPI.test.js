const BooksAPI = require("./BooksAPI")
// @ponicode
describe("BooksAPI.get", () => {
    test("0", () => {
        let callFunction = () => {
            BooksAPI.get("7289708e-b17a-477c-8a77-9ab575c4b4d8")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            BooksAPI.get("a85a8e6b-348b-4011-a1ec-1e78e9620782")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            BooksAPI.get("03ea49f8-1d96-4cd0-b279-0684e3eec3a9")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            BooksAPI.get(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("BooksAPI.getAll", () => {
    test("0", () => {
        let callFunction = () => {
            BooksAPI.getAll()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("BooksAPI.update", () => {
    test("0", () => {
        let callFunction = () => {
            BooksAPI.update("^5.0.0", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            BooksAPI.update("v1.2.4", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            BooksAPI.update("4.0.0-beta1\t", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            BooksAPI.update("1.0.0", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            BooksAPI.update("v4.0.0-rc.4", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            BooksAPI.update(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("BooksAPI.search", () => {
    test("0", () => {
        let callFunction = () => {
            BooksAPI.search("DROP TABLE tmp;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            BooksAPI.search("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            BooksAPI.search("DELETE FROM Projects WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            BooksAPI.search("UNLOCK TABLES;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            BooksAPI.search("UPDATE Projects SET pname = %s WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            BooksAPI.search(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
