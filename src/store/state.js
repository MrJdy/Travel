let defaultCity = '杭州'
try {
  defaultCity = localStorage.city
} catch (error) {}
export default {
  city: defaultCity
}
