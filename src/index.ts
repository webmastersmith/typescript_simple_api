interface Vehicle {
  name: string
  year: number
  broken: boolean
  summary(): string //if summary fn has arguments, they must be listed.
}

const oldCivic = {
  name: 'civic',
  year: 2008,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  },
}

const printVehicle = ({ name, year, broken }: Vehicle): void => {
  console.log(`
  Name: ${name}
  Year: ${year}
  Broken: ${broken}
  `)
}

printVehicle(oldCivic)
