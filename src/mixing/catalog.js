import axios from 'axios';

const catalog = {
    mounted() {
        this.delivery_date = this.defaultDeliveryDate;
        // this.selectedCatalog = this.$route.params.stockId;
        let stockId = this.$route.params.productId
        console.log(stockId)
        axios.get('http://192.168.1.133:8001/api/stocks/' + stockId).then(response => {
            if (response.data.status === 'ok') {
                this.dataSet = response.data.data
                this.dataReady = true;
                console.log(this.dataSet);
                this.dataSet.product.options.forEach((color) => {
                    color.isSelected = true;
                });

                this.dataSet.product.ranges.forEach((size) => {
                    size.isSelected = true;
                });
            } else if (response.data.status === 'error') {
                alert(response.data.message)
            } else {
                alert('Something went wrong! Please try again')
            }
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    },

    watch: {
        quantity(value) {
            this.calculateRegularAndAdvance(value);
        },
    },

    methods: {
        // toggleStatus() {
        //     this.$store.commit('toggleIsLive'); // Call the toggleIsLive mutation
        // },
        // async toggleStatus() {
        //     const stockId = this.$route.params.productId;
        //     const url = 'http://192.168.1.133:8001/api/internal/stocks/' + stockId;
        //     const data = {
        //       active: !this.isLive, // Toggle between true (live) and false (draft)
        //     };

        //     try {
        //       const response = await axios.put(url, data);

        //       // Assuming the response contains the updated status
        //       this.isLive = response.data.active;

        //       // Call the toggleIsLive mutation if needed
        //       this.$store.commit('toggleIsLive');
        //     } catch (error) {
        //       console.error('Error toggling status:', error);
        //       // You may want to handle errors and provide user feedback
        //     }
        //   },

        //  toggleStatus() {
        //     const stockId = this.$route.params.productId;
        //     const url = 'http://192.168.1.133:8001/api/internal/stocks/' + stockId;
        //     const newData = {
        //         active: this.active ? 'false' : 'true',
        //     };
        //     axios.put(url, newData) 
        //     // try {
        //     //     const response = await axios.put(url, newData);

        //         // if (response.data.status === 'true') {
        //         //     // Assuming you have a mutation to update the 'active' field in the stocks array
        //         //     this.$store.commit('updateStockActiveField', { stockId, newStatus: newData.active === 'true' });
        //         // } else {
        //         //     console.error('Unexpected response:', response.data);
        //         // }
        //     // } 
        //     // catch (error) {
        //     //     console.error('Error toggling status:', error);
        //     //     // You may want to handle errors and provide user feedback
        //     // }
        // },



        postData() {
            // Create an array to hold the quantities data
            const quantitiesArray = [];

            // Iterate over colors and sizes to build the quantities array
            this.dataSet.product.options.forEach((color) => {
                this.dataSet.product.ranges.forEach((size) => {
                    const key = `${color.sid}_${size.sid}`;

                    // Create an object with the color and size combination
                    const quantityObject = {};
                    quantityObject[key] = this.advance[key] || 0; // Use 0 if the quantity is undefined

                    quantitiesArray.push(quantityObject);
                });
            });

            // Create the requestData object
            const requestData = {
                product_sid: this.dataSet.product.sid,
                quantities: JSON.stringify(quantitiesArray),
                fabricator_sid: this.selectedFabricator,
                message: this.message,
                expected_at: this.delivery_date,
            };

            axios.post('http://192.168.1.133:8001/api/purchaseorders', requestData)
                .then((response) => {
                    console.log('api response', response);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        toggleColor(color) {
            color.isSelected = !color.isSelected;
            if (!color.isSelected) {
                for (const size of this.dataSet.product.ranges) {
                    this.advance[`${color.sid}_${size.sid}`] = 0;
                }
            }
            // Recalculate the advance distribution when color selection changes 
            this.calculateAdvanceDistribution();
        },
        toggleSize(size) {
            size.isSelected = !size.isSelected;
            if (!size.isSelected) {
                for (const color of this.dataSet.product.options) {
                    this.advance[`${color.sid}_${size.sid}`] = 0;
                    this.regular[`0_${size.sid}`] = 0;
                }
            }
            // Recalculate the advance distribution when size selection changes
            this.calculateAdvanceDistribution();
            this.calculateRegularDistribution();
        },
        calculateAdvanceDistribution() {
            // Calculate the quantity to distribute among selected colors and sizes
            const selectedColors = this.dataSet.product.options.filter((color) => color.isSelected);
            const selectedSizes = this.dataSet.product.ranges.filter((size) => size.isSelected);
            const totalSelected = selectedColors.length * selectedSizes.length;

            if (totalSelected === 0) {
                // Reset all advance quantities to 0 if nothing is selected
                for (const color of this.dataSet.product.options) {
                    for (const size of this.dataSet.product.ranges) {
                        this.advance[`${color.sid}_${size.sid}`] = 0;
                        this.regular[`0_${size.sid}`] = 0;
                    }
                }
            } else {
                // Calculate and distribute the quantity among selected colors and sizes
                const quantityPerItem = Math.round(this.quantity / totalSelected);

                for (const color of this.dataSet.product.options) {
                    for (const size of this.dataSet.product.ranges) {
                        if (color.isSelected && size.isSelected) {
                            this.advance[`${color.sid}_${size.sid}`] = quantityPerItem; // Remove Math.round()
                            this.regular[`0_${size.sid}`] = quantityPerItem; // Remove Math.round()
                        } else {
                            this.advance[`${color.sid}_${size.sid}`] = 0;
                            this.regular[`0_${size.sid}`] = 0;
                        }
                    }
                }
            }
        },
        calculateRegularDistribution() {
            // Calculate the quantity to distribute among selected sizes
            const selectedSizes = this.dataSet.product.ranges.filter((size) => size.isSelected);
            const totalSelected = selectedSizes.length;

            if (totalSelected === 0) {
                // Reset all regular quantities to 0 if nothing is selected
                for (const size of this.dataSet.product.ranges) {
                    this.regular[`0_${size.sid}`] = 0;
                }
            } else {
                // Calculate and distribute the quantity among selected sizes
                const quantityPerItem = Math.round(this.quantity / totalSelected);

                for (const size of this.dataSet.product.ranges) {
                    if (size.isSelected) {
                        this.regular[`0_${size.sid}`] = quantityPerItem;
                    } else {
                        this.regular[`0_${size.sid}`] = 0;
                    }
                }
            }
        },
        calculateRegularAndAdvance(value) {
            const dividedValueBySizes = parseInt(value) / this.dataSet.product.ranges.length;
            const dividedValueByColorAndSizes = parseInt(value) / (this.dataSet.product.ranges.length * this.dataSet.product.options.length);

            this.dataSet.product.ranges.forEach((size) => {
                this.regular[`0_${size.sid}`] = Math.round(dividedValueBySizes);

                this.dataSet.product.options.forEach((color) => {
                    this.advance[`${color.sid}_${size.sid}`] = Math.round(dividedValueByColorAndSizes);
                });
            });
        },
        calculateRegularSizeTotal() {
            let total = 0;
            this.dataSet.product.ranges.forEach((size) => {
                // console.warn(sizeIndex)
                total += parseInt(this.regular[`0_${size.sid}`]);
            });
            return total;
        },
        calculateAdvanceSizeTotal() {
            let total = 0;

            // Iterate over colors and sizes
            this.dataSet.product.options.forEach((color) => {
                this.dataSet.product.ranges.forEach((size) => {
                    total += parseInt(this.advance[`${color.sid}_${size.sid}`]);
                });
            });

            return total;
        },
        calculateAdvanceTotal(footSizeindex) {
            let total = 0;

            for (let colorIndex = 0; colorIndex < this.dataSet.product.options.length; colorIndex++) {
                const color = this.dataSet.product.options[colorIndex];
                const size = this.dataSet.product.ranges[footSizeindex];
                const quantity = parseInt(this.advance[`${color.sid}_${size.sid}`]);
                total += isNaN(quantity) ? 0 : quantity;
            }

            return total;
        },
    },

}
export default catalog